const fetch = require('node-fetch');
module.exports = {
  name: 'mediafire',
  description: 'Download from MediaFire',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a MediaFire URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.akuari.my.id/download/mediafire?link=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result.link) {
        await sock.sendMessage(jid, { document: { url: data.result.link }, fileName: data.result.filename, mimetype: 'application/octet-stream' }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Download failed.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service unreachable.' });
    }
  }
};