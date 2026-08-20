const fetch = require('node-fetch');
module.exports = {
  name: 'ytmp3',
  description: 'Download YouTube audio (MP3)',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a YouTube URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.akuari.my.id/download/ytmp3?link=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result.download_url) {
        await sock.sendMessage(jid, {
          audio: { url: data.result.download_url },
          mimetype: 'audio/mpeg',
          fileName: data.result.title + '.mp3'
        }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Failed to download. The link might be invalid or the service is busy.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service is currently unreachable.' });
    }
  }
};