const fs = require('fs');
module.exports = {
    name: 'info',
    description: 'Bot information',
    async execute(sock, msg, args) {
        const uptime = () => {
            const s = Math.floor(process.uptime());
            const h = Math.floor(s / 3600);
            const m = Math.floor((s % 3600) / 60);
            return `${h}h ${m}m ${s % 60}s`;
        };
        const caption = `🤖 *HAMATRIX BETA AI*\n\n` +
                        `👑 Owner: Son\n` +
                        `📦 Commands: 500+\n` +
                        `⏱ Uptime: ${uptime()}\n` +
                        `⚙️ Mode: public\n` +
                        `🏷 Version: 1.0.0 Beta\n` +
                        `🧠 Engine: Quantum Core\n\n` +
                        `© Hamatrix Beta Ai`;
        const image = fs.readFileSync('./branding.jpg');
        await sock.sendMessage(msg.key.remoteJid, {
            image: image,
            caption
        }, { quoted: msg });
    }
};
