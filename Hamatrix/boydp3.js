module.exports = {
  name: 'boydp3',
  description: 'Boy DP 3',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy3.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};