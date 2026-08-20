module.exports = {
  name: 'boydp19',
  description: 'Boy DP 19',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy19.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};