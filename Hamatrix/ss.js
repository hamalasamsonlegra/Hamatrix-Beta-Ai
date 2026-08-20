module.exports = {
  name: 'ss',
  description: 'Screenshot a website',
  async execute(sock, msg, args) {
    const url = args[0];
    if (!url) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a URL.' });
    const screenshotUrl = `https://image.thum.io/get/width/1920/crop/600/${encodeURIComponent(url)}`;
    await sock.sendMessage(msg.key.remoteJid, { image: { url: screenshotUrl } }, { quoted: msg });
  }
};