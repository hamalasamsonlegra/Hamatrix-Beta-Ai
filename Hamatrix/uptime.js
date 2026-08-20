module.exports = {
    name: 'uptime',
    description: 'Show bot uptime with detailed breakdown',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        const totalSeconds = Math.floor(process.uptime());
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const startTime = new Date(Date.now() - totalSeconds * 1000).toLocaleString();

        const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
        const rss = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);

        const text = `⏱️ *UPTIME REPORT*

📅 *Days*: ${days}
🕒 *Hours*: ${hours}
🕑 *Minutes*: ${minutes}
⏲️ *Seconds*: ${seconds}

🕰 *Total*: ${days}d ${hours}h ${minutes}m ${seconds}s

📆 *Started*: ${startTime}

💾 *RAM Used*: ${mem} MB
🧠 *RSS*: ${rss} MB
🖥 *Platform*: ${process.platform}
🔧 *Node.js*: ${process.version}

⚙️ *Status*: Running smooth
🔥 *Health*: Excellent`;

        await sock.sendMessage(jid, { text }, { quoted: msg });
    }
};
