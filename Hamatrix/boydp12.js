module.exports = {
  name: 'boydp12',
  description: 'Boy DP 12',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy12.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};