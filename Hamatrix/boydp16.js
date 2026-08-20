module.exports = {
  name: 'boydp16',
  description: 'Boy DP 16',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy16.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};