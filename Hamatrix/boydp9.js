module.exports = {
  name: 'boydp9',
  description: 'Boy DP 9',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy9.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};