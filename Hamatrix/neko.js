const fetch = require('node-fetch');

module.exports = {
  name: 'neko',
  description: 'Random neko image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'neko'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'neko'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'neko'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'neko'}* image unavailable right now.` });
    }
  }
};