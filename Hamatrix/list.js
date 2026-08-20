const { sendInteractiveMessage } = require('../lib/btns');

module.exports = {
    name: 'list',
    description: 'Interactive list picker',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        await sendInteractiveMessage(sock, jid, {
            text: '📋 Choose a category:',
            footer: '© Hamatrix',
            interactiveButtons: [
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Menu',
                        sections: [{
                            title: 'Commands',
                            rows: [
                                { id: `ping_${ts}`, title: '🏓 Ping', description: 'Test response' },
                                { id: `repo_${ts}`, title: '📂 Repo', description: 'GitHub link' },
                                { id: `owner_${ts}`, title: '👤 Owner', description: 'Contact card' },
                                { id: `info_${ts}`, title: 'ℹ️ Info', description: 'Bot info' }
                            ]
                        }]
                    })
                }
            ]
        });
    }
};
