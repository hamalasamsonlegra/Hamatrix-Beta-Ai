module.exports = {
  name: 'boydp17',
  description: 'Boy DP 17',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy17.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};