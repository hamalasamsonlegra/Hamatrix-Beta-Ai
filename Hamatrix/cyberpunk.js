const fetch = require('node-fetch');

module.exports = {
  name: 'cyberpunk',
  description: 'Random cyberpunk image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'cyberpunk'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'cyberpunk'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'cyberpunk'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'cyberpunk'}* image unavailable right now.` });
    }
  }
};