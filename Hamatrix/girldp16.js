module.exports = {
  name: 'girldp16',
  description: 'Girl DP 16',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl16.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};