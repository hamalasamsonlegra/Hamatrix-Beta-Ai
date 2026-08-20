const fetch = require('node-fetch');
module.exports = {
  name: 'ytmp4',
  description: 'Download YouTube video (MP4)',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a YouTube URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.akuari.my.id/download/ytmp4?link=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result.download_url) {
        await sock.sendMessage(jid, {
          video: { url: data.result.download_url },
          caption: '🎬 ' + data.result.title
        }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Failed to download. The link might be invalid or the service is busy.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service is currently unreachable.' });
    }
  }
};