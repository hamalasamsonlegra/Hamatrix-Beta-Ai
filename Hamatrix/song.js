const fetch = require('node-fetch');
module.exports = {
  name: 'song',
  description: 'Download from song',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: 'Please provide a URL.' }, { quoted: msg });
    try {
      // Use a generic free API (you'll need to replace with a working one)
      const apiUrl = `https://api.example.com/download?${cmd}&url=${encodeURIComponent(url)}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.status && data.url) {
        await sock.sendMessage(jid, { document: { url: data.url }, mimetype: 'audio/mpeg', fileName: 'download.mp3' });
      } else {
        await sock.sendMessage(jid, { text: 'Download failed. The API might be down or the link is invalid.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: 'Error accessing download service.' });
    }
  }
};