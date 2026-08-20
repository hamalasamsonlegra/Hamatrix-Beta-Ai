const fetch = require('node-fetch');

module.exports = {
  name: 'elf',
  description: 'Random elf image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(`https://api.waifu.pics/sfw/${'elf'}`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: `${'elf'}!` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `Could not fetch ${'elf'} image.` });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'elf'}* image unavailable right now.` });
    }
  }
};