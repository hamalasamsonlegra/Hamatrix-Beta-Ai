const fetch = require('node-fetch');

module.exports = {
  name: 'aesthetic',
  description: 'Random aesthetic image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'aesthetic'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'aesthetic'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'aesthetic'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'aesthetic'}* image unavailable right now.` });
    }
  }
};