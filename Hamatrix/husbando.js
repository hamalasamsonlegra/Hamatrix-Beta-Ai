const fetch = require('node-fetch');

module.exports = {
  name: 'husbando',
  description: 'Random husbando image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'husbando'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'husbando'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'husbando'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'husbando'}* image unavailable right now.` });
    }
  }
};