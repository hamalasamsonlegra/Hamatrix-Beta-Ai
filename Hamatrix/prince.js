const fetch = require('node-fetch');

module.exports = {
  name: 'prince',
  description: 'Random prince image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'prince'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'prince'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'prince'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'prince'}* image unavailable right now.` });
    }
  }
};