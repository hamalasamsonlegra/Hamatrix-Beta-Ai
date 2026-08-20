const { sendInteractiveMessage } = require('../lib/btns');

function uptime() {
    const s = Math.floor(process.uptime());
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
}

const BOT_INFO = {
    name: 'HAMATRIX BETA AI',
    creator: 'Son',
    version: 'Beta 2.0',
    prefix: '.',
    mode: 'public'
};

const CATEGORIES = [
    { id: 'ai',       name: 'AI Assistant',       cmds: ['gpt35','gpt4','claude','gemini','deepseek','llama','copilot'] },
    { id: 'fun',      name: 'Fun & Reactions',    cmds: ['hug','kiss','slap','cuddle','joke','quote','fact','8ball'] },
    { id: 'download', name: 'Download Center',    cmds: ['ytmp3','ytmp4','tiktok','ig','fb','play','lyrics'] },
    { id: 'group',    name: 'Group Tools',        cmds: ['kick','add','promote','demote','tagall','poll','mute','unmute'] },
    { id: 'media',    name: 'Media & Sticker',    cmds: ['sticker','toimg','tovideo','toaudio','take'] },
    { id: 'owner',    name: 'Owner Zone',         cmds: ['block','unblock','broadcast','setprefix','restart'] }
];

function extractSelectedId(message) {
    try {
        if (message.listResponseMessage?.singleSelectReply?.selectedRowId)
            return message.listResponseMessage.singleSelectReply.selectedRowId;
        if (message.buttonsResponseMessage?.selectedButtonId)
            return message.buttonsResponseMessage.selectedButtonId;
        if (message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
            const params = JSON.parse(message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
            return params.id || null;
        }
    } catch {}
    return null;
}

module.exports = {
    name: 'menu2',
    description: 'Advanced interactive menu with sheets and buttons',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        // 🚀 Fast: no forwarded/fake reply, no typing
        global.skipForward = true;
        global.skipTyping = true;

        try {
            // Main message: text + buttons + sheet
            const mainText = `🔮 *${BOT_INFO.name}*\n` +
                             `📂 Advanced Interactive Menu\n` +
                             `⏱ Uptime: ${uptime()}\n` +
                             `⚙️ Mode: ${BOT_INFO.mode}\n\n` +
                             `_Select a category or use the buttons below:_`;

            await sendInteractiveMessage(sock, jid, {
                text: mainText,
                footer: `© ${BOT_INFO.name}`,
                interactiveButtons: [
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '✨ Feature Test',
                            id: `feature_test_${ts}`
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: '🌐 Visit Creator',
                            url: 'https://wa.me/256795312914'
                        })
                    },
                    {
                        name: 'cta_call',
                        buttonParamsJson: JSON.stringify({
                            display_text: '📞 Call Owner',
                            phone_number: '+256795312914'
                        })
                    },
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '📂 Categories',
                            sections: [{
                                title: 'Choose a category',
                                rows: CATEGORIES.map(cat => ({
                                    id: `m2_cat_${cat.id}_${ts}`,
                                    title: cat.name,
                                    description: `${cat.cmds.length} commands`
                                }))
                            }]
                        })
                    }
                ]
            });

            // Listener for button/selection
            const handleTap = async (event) => {
                const messages = event.messages || [];
                for (const m of messages) {
                    if (m.key.remoteJid !== jid) continue;
                    const selId = extractSelectedId(m.message);
                    if (!selId || !selId.endsWith('_' + ts)) continue;

                    // Feature test button
                    if (selId === `feature_test_${ts}`) {
                        await sendInteractiveMessage(sock, jid, {
                            text: '🎯 *Feature Test*\n\nThis is a quick reply demonstration.',
                            footer: `© ${BOT_INFO.name}`,
                            interactiveButtons: [
                                {
                                    name: 'quick_reply',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Yes',
                                        id: `yes_${ts}`
                                    })
                                },
                                {
                                    name: 'quick_reply',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'No',
                                        id: `no_${ts}`
                                    })
                                }
                            ]
                        });
                        break;
                    }

                    // Category selection
                    const catMatch = selId.match(/^m2_cat_(.+)_\d+$/);
                    if (catMatch) {
                        const cat = CATEGORIES.find(c => c.id === catMatch[1]);
                        if (cat) {
                            const cmdRows = cat.cmds.map(cmd => ({
                                id: `m2_cmd_${cmd}_${ts}`,
                                title: `${BOT_INFO.prefix}${cmd}`,
                                description: `Execute ${cmd}`
                            }));

                            await sendInteractiveMessage(sock, jid, {
                                text: `📂 *${cat.name}*\n${cat.cmds.length} commands available.`,
                                footer: `© ${BOT_INFO.name}`,
                                interactiveButtons: [
                                    {
                                        name: 'single_select',
                                        buttonParamsJson: JSON.stringify({
                                            title: `Commands in ${cat.name}`,
                                            sections: [{ title: cat.name, rows: cmdRows }]
                                        })
                                    }
                                ]
                            });
                        }
                        break;
                    }

                    // Quick reply responses
                    if (selId === `yes_${ts}`) {
                        await sock.sendMessage(jid, { text: '✅ You selected *Yes*!' }, { quoted: m });
                    } else if (selId === `no_${ts}`) {
                        await sock.sendMessage(jid, { text: '❌ You selected *No*.' }, { quoted: m });
                    }

                    break;
                }
            };

            sock.ev.on('messages.upsert', handleTap);
            setTimeout(() => sock.ev.off('messages.upsert', handleTap), 5 * 60 * 1000);

        } catch (e) {
            console.error('menu2 failed:', e.message);
        } finally {
            global.skipForward = false;
            global.skipTyping = false;
        }
    }
};
