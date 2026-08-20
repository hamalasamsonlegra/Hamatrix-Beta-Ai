module.exports = {
  name: 'boydp1',
  description: 'Boy DP 1',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy1.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};