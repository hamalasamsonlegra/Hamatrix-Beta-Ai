const { sendInteractiveMessage } = require('../lib/btns');

module.exports = {
    name: 'interact',
    description: 'Show all working interactive message types',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        const send = async (payload) => {
            // Set flags BEFORE each message
            global.skipForward = true;
            global.skipTyping = true;
            await sendInteractiveMessage(sock, jid, payload);
            // Reset after each
            global.skipForward = false;
            global.skipTyping = false;
            // Small delay between messages
            await new Promise(r => setTimeout(r, 500));
        };

        try {
            // 1. Quick Reply Button
            await send({
                text: '🔘 *Quick Reply Button*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Click Me',
                            id: `quick_${ts}`
                        })
                    }
                ]
            });

            // 2. URL Button
            await send({
                text: '🌐 *URL Button*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Open GitHub',
                            url: 'https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai'
                        })
                    }
                ]
            });

            // 3. Call Button
            await send({
                text: '📞 *Call Button*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'cta_call',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Call Owner',
                            phone_number: '+256795312914'
                        })
                    }
                ]
            });

            // 4. Copy Button
            await send({
                text: '📋 *Copy Button*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'cta_copy',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Copy Text',
                            copy_code: 'Hamatrix Beta is awesome!'
                        })
                    }
                ]
            });

            // 5. List Picker (Sheet) – single section
            await send({
                text: '📂 *List Picker (Sheet)*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'Choose an option',
                            sections: [{
                                title: 'General',
                                rows: [
                                    { id: `info_${ts}`, title: 'ℹ️ Info', description: 'Bot info' },
                                    { id: `ping_${ts}`, title: '🏓 Ping', description: 'Test response' }
                                ]
                            }]
                        })
                    }
                ]
            });

            // 6. Multi-section Sheet
            await send({
                text: '📑 *Multi-section Sheet*',
                footer: '© Hamatrix Beta',
                interactiveButtons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'Select category',
                            sections: [
                                {
                                    title: 'Actions',
                                    rows: [
                                        { id: `repo_${ts}`, title: '📂 Repo', description: 'Source code' },
                                        { id: `owner_${ts}`, title: '👤 Owner', description: 'Contact' }
                                    ]
                                },
                                {
                                    title: 'Others',
                                    rows: [
                                        { id: `joke_${ts}`, title: '😆 Joke', description: 'Random joke' },
                                        { id: `fact_${ts}`, title: '🔍 Fact', description: 'Random fact' }
                                    ]
                                }
                            ]
                        })
                    }
                ]
            });

            // Listener for responses from any of the above
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
                        case 'quick': reply = '✅ Quick reply clicked!'; break;
                        case 'info': reply = '🤖 Hamatrix Beta AI v1.0'; break;
                        case 'ping': reply = '🏓 Pong!'; break;
                        case 'repo': reply = '📂 https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai'; break;
                        case 'owner': reply = '👤 Owner: Son'; break;
                        case 'joke': reply = '😆 Why did the bot go to therapy? It had too many unresolved commands.'; break;
                        case 'fact': reply = '🔍 Honey never spoils.'; break;
                        default: reply = `You selected: ${cleanId}`;
                    }
                    await sock.sendMessage(jid, { text: reply }, { quoted: m });
                    break;
                }
            };

            sock.ev.on('messages.upsert', handleResponse);
            setTimeout(() => sock.ev.off('messages.upsert', handleResponse), 5 * 60 * 1000);

        } catch (e) {
            console.error('interact error:', e.message);
            await sock.sendMessage(jid, { text: '❌ Interactive demo failed.' });
        }
    }
};
