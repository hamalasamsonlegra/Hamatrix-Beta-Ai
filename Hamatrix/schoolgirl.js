const fetch = require('node-fetch');

module.exports = {
  name: 'schoolgirl',
  description: 'Random schoolgirl image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'schoolgirl'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'schoolgirl'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'schoolgirl'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'schoolgirl'}* image unavailable right now.` });
    }
  }
};