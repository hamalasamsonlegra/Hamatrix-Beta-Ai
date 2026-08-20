module.exports = {
  name: 'boydp10',
  description: 'Boy DP 10',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy10.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};