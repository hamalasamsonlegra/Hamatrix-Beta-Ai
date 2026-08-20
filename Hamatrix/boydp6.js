module.exports = {
  name: 'boydp6',
  description: 'Boy DP 6',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy6.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};