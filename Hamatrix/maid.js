const fetch = require('node-fetch');

module.exports = {
  name: 'maid',
  description: 'Random maid image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'maid'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'maid'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'maid'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'maid'}* image unavailable right now.` });
    }
  }
};