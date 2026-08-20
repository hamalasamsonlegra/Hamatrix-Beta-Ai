const fetch = require('node-fetch');

module.exports = {
  name: 'animeboy',
  description: 'Random animeboy image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'animeboy'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'animeboy'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'animeboy'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'animeboy'}* image unavailable right now.` });
    }
  }
};