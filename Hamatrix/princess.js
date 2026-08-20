const fetch = require('node-fetch');

module.exports = {
  name: 'princess',
  description: 'Random princess image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'princess'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'princess'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'princess'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'princess'}* image unavailable right now.` });
    }
  }
};