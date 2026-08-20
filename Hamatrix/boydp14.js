module.exports = {
  name: 'boydp14',
  description: 'Boy DP 14',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy14.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};