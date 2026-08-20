const fs = require('fs');
module.exports = {
    name: 'repo',
    description: 'Show repository link',
    async execute(sock, msg, args) {
        const caption = '📂 https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai';
        const image = fs.readFileSync('./branding.jpg');
        await sock.sendMessage(msg.key.remoteJid, {
            image: image,
            caption
        }, { quoted: msg });
    }
};
