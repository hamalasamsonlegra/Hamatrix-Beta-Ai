const fs = require('fs');
module.exports = {
    name: 'owner',
    description: 'Owner information',
    async execute(sock, msg, args) {
        // You can still send the contact card BEFORE the image if you like
        const vcard = 'BEGIN:VCARD\nVERSION:3.0\nFN:Hamatrix Owner\nTEL;waid=256795312914:+256 748 800194\nEND:VCARD';
        await sock.sendMessage(msg.key.remoteJid, {
            contacts: { displayName: 'Hamatrix Owner', contacts: [{ vcard }] }
        });

        const caption = '👤 Owner: Son\n📞 +256 748 800194';
        const image = fs.readFileSync('./branding.jpg');
        await sock.sendMessage(msg.key.remoteJid, {
            image: image,
            caption
        }, { quoted: msg });
    }
};
