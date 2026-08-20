const fetch = require('node-fetch');

module.exports = {
  name: 'waifu',
  description: 'Random waifu image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'waifu'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'waifu'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'waifu'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'waifu'}* image unavailable right now.` });
    }
  }
};