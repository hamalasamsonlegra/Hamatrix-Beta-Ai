module.exports = {
  name: 'boydp18',
  description: 'Boy DP 18',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy18.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};