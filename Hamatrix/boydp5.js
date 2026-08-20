module.exports = {
  name: 'boydp5',
  description: 'Boy DP 5',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy5.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};