module.exports = {
  name: 'boydp22',
  description: 'Boy DP 22',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy22.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};