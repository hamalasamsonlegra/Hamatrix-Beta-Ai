const fetch = require('node-fetch');

module.exports = {
  name: 'kitsune',
  description: 'Random kitsune image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'kitsune'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'kitsune'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'kitsune'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'kitsune'}* image unavailable right now.` });
    }
  }
};