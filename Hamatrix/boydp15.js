module.exports = {
  name: 'boydp15',
  description: 'Boy DP 15',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy15.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};