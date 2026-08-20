module.exports = {
  name: 'boydp13',
  description: 'Boy DP 13',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy13.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};