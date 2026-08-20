module.exports = {
  name: 'boydp2',
  description: 'Boy DP 2',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy2.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};