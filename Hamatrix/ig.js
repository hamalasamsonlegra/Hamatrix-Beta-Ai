const fetch = require('node-fetch');
module.exports = {
  name: 'ig',
  description: 'Download Instagram photo/video',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide an Instagram URL.' }, { quoted: msg });
    try {
      const res = await fetch('https://api.maher-zubair.tech/download/instagram?url=' + encodeURIComponent(url));
      const data = await res.json();
      if (data.status && data.result && data.result[0]) {
        const media = data.result[0];
        if (media.type === 'image') {
          await sock.sendMessage(jid, { image: { url: media.url } }, { quoted: msg });
        } else {
          await sock.sendMessage(jid, { video: { url: media.url }, caption: '📸 Instagram' }, { quoted: msg });
        }
      } else {
        await sock.sendMessage(jid, { text: '❌ Unable to download. The post might be private.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Download service is currently unreachable.' });
    }
  }
};