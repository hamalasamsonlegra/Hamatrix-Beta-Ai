const fetch = require('node-fetch');
module.exports = {
  name: 'fb',
  description: 'Download Facebook video',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a Facebook video URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.maher-zubair.tech/download/facebook?url=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result.videoUrl) {
        await sock.sendMessage(jid, { video: { url: data.result.videoUrl }, caption: '📘 Facebook video' }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Failed to download. The video might be private or removed.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service is currently unreachable.' });
    }
  }
};