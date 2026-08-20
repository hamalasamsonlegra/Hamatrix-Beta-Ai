const fetch = require('node-fetch');

module.exports = {
  name: 'gamer',
  description: 'Random gamer image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'gamer'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'gamer'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'gamer'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'gamer'}* image unavailable right now.` });
    }
  }
};