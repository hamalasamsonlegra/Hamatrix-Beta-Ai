const { sendInteractiveMessage } = require('../lib/btns');

module.exports = {
    name: 'advanced',
    description: 'Showcase all working interactive and media features',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        const send = async (payload) => {
            global.skipForward = true;
            global.skipTyping = true;
            await sendInteractiveMessage(sock, jid, payload);
            global.skipForward = false;
            global.skipTyping = false;
            await new Promise(r => setTimeout(r, 600));
        };

        try {
            // 1. Quick reply + URL + Call + Copy
            await send({
                text: '🔘 *Buttons Demo*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({ display_text: 'Ping', id: `adv_ping_${ts}` })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({ display_text: 'GitHub', url: 'https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai' })
                    },
                    {
                        name: 'cta_call',
                        buttonParamsJson: JSON.stringify({ display_text: 'Call', phone_number: '+256795312914' })
                    },
                    {
                        name: 'cta_copy',
                        buttonParamsJson: JSON.stringify({ display_text: 'Copy', copy_code: 'Hamatrix Beta AI' })
                    }
                ]
            });

            // 2. List picker with two sections
            await send({
                text: '📂 *Sheet (List Picker)*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'Choose option',
                            sections: [
                                {
                                    title: 'General',
                                    rows: [
                                        { id: `adv_info_${ts}`, title: 'ℹ️ Info', description: 'Bot info' },
                                        { id: `adv_uptime_${ts}`, title: '⏱️ Uptime', description: 'Runtime' }
                                    ]
                                },
                                {
                                    title: 'Actions',
                                    rows: [
                                        { id: `adv_repo_${ts}`, title: '📂 Repo', description: 'Source code' },
                                        { id: `adv_owner_${ts}`, title: '👤 Owner', description: 'Contact' }
                                    ]
                                }
                            ]
                        })
                    }
                ]
            });

            // 3. Poll
            global.skipForward = true;
            global.skipTyping = true;
            await sock.sendMessage(jid, {
                poll: {
                    name: 'Best AI?',
                    values: ['GPT-4', 'Claude', 'Gemini'],
                    selectableCount: 1
                }
            });
            global.skipForward = false;
            global.skipTyping = false;
            await new Promise(r => setTimeout(r, 600));

            // 4. Contact card
            global.skipForward = true;
            global.skipTyping = true;
            const vcard = 'BEGIN:VCARD\nVERSION:3.0\nFN:Hamatrix Owner\nTEL;waid=256795312914:+256 795 312914\nEND:VCARD';
            await sock.sendMessage(jid, { contacts: { displayName: 'Owner', contacts: [{ vcard }] } });
            global.skipForward = false;
            global.skipTyping = false;
            await new Promise(r => setTimeout(r, 600));

            // 5. Location
            global.skipForward = true;
            global.skipTyping = true;
            await sock.sendMessage(jid, { location: { degreesLatitude: 0.3476, degreesLongitude: 32.5825 } });
            global.skipForward = false;
            global.skipTyping = false;
            await new Promise(r => setTimeout(r, 600));

            // 6. View once message
            global.skipForward = true;
            global.skipTyping = true;
            await sock.sendMessage(jid, { text: 'This is a secret', viewOnce: true });
            global.skipForward = false;
            global.skipTyping = false;

        } catch (e) {
            console.error('advanced error:', e.message);
        }

        // Listener for button/selection responses
        const handleResponse = async (event) => {
            const messages = event.messages || [];
            for (const m of messages) {
                if (m.key.remoteJid !== jid) continue;
                let selectedId = null;
                if (m.message?.listResponseMessage?.singleSelectReply?.selectedRowId) {
                    selectedId = m.message.listResponseMessage.singleSelectReply.selectedRowId;
                } else if (m.message?.buttonsResponseMessage?.selectedButtonId) {
                    selectedId = m.message.buttonsResponseMessage.selectedButtonId;
                } else if (m.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
                    selectedId = JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id;
                }
                if (!selectedId || !selectedId.endsWith('_' + ts)) continue;
                const cleanId = selectedId.replace(/_\d+$/, '');
                let reply = '';
                switch (cleanId) {
                    case 'adv_ping': reply = '🏓 Pong!'; break;
                    case 'adv_info': reply = '🤖 Hamatrix Beta AI v1.0'; break;
                    case 'adv_uptime': {
                        const s = Math.floor(process.uptime());
                        reply = `⏱️ ${Math.floor(s/3600)}h ${Math.floor((s%3600)/60)}m ${s%60}s`;
                        break;
                    }
                    case 'adv_repo': reply = '📂 https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai'; break;
                    case 'adv_owner': reply = '👤 Owner: Son'; break;
                    default: reply = `You selected: ${cleanId}`;
                }
                await sock.sendMessage(jid, { text: reply }, { quoted: m });
                break;
            }
        };

        sock.ev.on('messages.upsert', handleResponse);
        setTimeout(() => sock.ev.off('messages.upsert', handleResponse), 5 * 60 * 1000);
    }
};
