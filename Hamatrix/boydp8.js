module.exports = {
  name: 'boydp8',
  description: 'Boy DP 8',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy8.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};