const { sendBtn, sendList, sendUrlBtn } = require('../lib/btns');

module.exports = {
    name: 'btnlab',
    description: 'Test all button/list helpers with aimode',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        // 1. Simple buttons (quick replies)
        await sendBtn(sock, jid, {
            text: '🔘 *Button Test*\nChoose:',
            footer: '© Hamatrix',
            buttons: [
                { text: 'Ping', id: 'btnlab_ping' },
                { text: 'Repo', id: 'btnlab_repo' }
            ]
        });

        // 2. URL + Copy + Call buttons
        await sendUrlBtn(sock, jid, {
            text: '🔗 *Link & Action Buttons*',
            url: 'https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai',
            urlText: 'GitHub',
            copyCode: 'Hamatrix Beta',
            copyText: 'Copy Bot Name',
            callNumber: '+256795312914',
            callText: 'Call Owner'
        });

        // 3. List picker (sheet)
        await sendList(sock, jid, {
            text: '📂 *List Sheet*',
            sections: [
                {
                    title: 'General',
                    rows: [
                        { id: 'btnlab_info', title: 'ℹ️ Info', description: 'Bot info' },
                        { id: 'btnlab_uptime', title: '⏱️ Uptime', description: 'Runtime' }
                    ]
                }
            ]
        });
    }
};
