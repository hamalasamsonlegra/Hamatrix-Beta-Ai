module.exports = {
  name: 'boydp20',
  description: 'Boy DP 20',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy20.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};