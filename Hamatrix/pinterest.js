const fetch = require('node-fetch');
module.exports = {
  name: 'pinterest',
  description: 'Download Pinterest image/video',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a Pinterest URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.akuari.my.id/download/pinterest?link=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result) {
        const mediaUrl = data.result.image || data.result.video;
        if (!mediaUrl) return sock.sendMessage(jid, { text: '❌ No media found.' });
        if (mediaUrl.endsWith('.mp4')) {
          await sock.sendMessage(jid, { video: { url: mediaUrl } }, { quoted: msg });
        } else {
          await sock.sendMessage(jid, { image: { url: mediaUrl } }, { quoted: msg });
        }
      } else {
        await sock.sendMessage(jid, { text: '❌ Download failed.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Service unreachable.' });
    }
  }
};