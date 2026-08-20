const fetch = require('node-fetch');

module.exports = {
  name: 'animegirl',
  description: 'Random animegirl image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'animegirl'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'animegirl'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'animegirl'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'animegirl'}* image unavailable right now.` });
    }
  }
};