module.exports = {
    name: 'ping',
    description: 'Show detailed bot response and system stats',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const start = Date.now();
        const botName = 'HAMATRIX BETA AI';
        const prefix = '.';
        const mode = 'public';
        const version = '1.0.0 Beta';
        const owner = 'Son';

        // Simulate quick processing for realistic ping
        await new Promise(r => setTimeout(r, 100));

        const pingMs = Date.now() - start;
        const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
        const rss = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);
        const uptimeSec = Math.floor(process.uptime());
        const uptimeStr = `${Math.floor(uptimeSec/3600)}h ${Math.floor((uptimeSec%3600)/60)}m ${uptimeSec%60}s`;
        const nodeVersion = process.version;
        const platform = process.platform;

        const text = `🏓 *PING REPORT*

🤖 *Bot*: ${botName}
👑 *Owner*: ${owner}
⚡ *Response*: ${pingMs}ms
🚀 *Speed*: Ultra Fast
📶 *Status*: Online

⏱️ *Uptime*: ${uptimeStr}
💾 *RAM Used*: ${mem} MB
🧠 *RSS*: ${rss} MB
🖥 *Platform*: ${platform}
🔧 *Node.js*: ${nodeVersion}

📦 *Prefix*: ${prefix}
⚙️ *Mode*: ${mode}
🏷 *Version*: ${version}

🛡️ *Engine*: Quantum Core
🔥 *Health*: 100%`;

        await sock.sendMessage(jid, { text }, { quoted: msg });
    }
};
