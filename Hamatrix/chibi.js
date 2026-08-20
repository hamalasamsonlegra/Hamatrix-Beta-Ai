const fetch = require('node-fetch');

module.exports = {
  name: 'chibi',
  description: 'Random chibi image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'chibi'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'chibi'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'chibi'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'chibi'}* image unavailable right now.` });
    }
  }
};