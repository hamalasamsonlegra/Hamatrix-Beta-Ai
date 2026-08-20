module.exports = {
  name: 'boydp21',
  description: 'Boy DP 21',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy21.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};