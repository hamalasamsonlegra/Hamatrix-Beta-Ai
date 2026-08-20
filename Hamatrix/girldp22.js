module.exports = {
  name: 'girldp22',
  description: 'Girl DP 22',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl22.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};