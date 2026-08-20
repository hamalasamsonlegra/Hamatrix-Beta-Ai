module.exports = {
  name: 'girldp2',
  description: 'Girl DP 2',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl2.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};