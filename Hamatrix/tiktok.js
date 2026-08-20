const fetch = require('node-fetch');
module.exports = {
  name: 'tiktok',
  description: 'Download TikTok video without watermark',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a TikTok URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.akuari.my.id/download/tiktok?link=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result.nowm) {
        await sock.sendMessage(jid, {
          video: { url: data.result.nowm },
          caption: '🎵 TikTok downloaded'
        }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Failed to download. The link might be private or invalid.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service is currently unreachable.' });
    }
  }
};