const fetch = require('node-fetch');

module.exports = {
  name: 'idol',
  description: 'Random idol image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'idol'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'idol'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'idol'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'idol'}* image unavailable right now.` });
    }
  }
};