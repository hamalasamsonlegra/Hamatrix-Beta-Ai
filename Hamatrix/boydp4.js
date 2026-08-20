module.exports = {
  name: 'boydp4',
  description: 'Boy DP 4',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy4.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};