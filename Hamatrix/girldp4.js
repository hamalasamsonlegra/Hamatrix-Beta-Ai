module.exports = {
  name: 'girldp4',
  description: 'Girl DP 4',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl4.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};