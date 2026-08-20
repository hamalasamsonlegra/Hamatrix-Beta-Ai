module.exports = {
  name: 'boydp7',
  description: 'Boy DP 7',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy7.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};