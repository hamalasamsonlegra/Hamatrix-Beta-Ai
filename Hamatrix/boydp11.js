module.exports = {
  name: 'boydp11',
  description: 'Boy DP 11',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy11.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};