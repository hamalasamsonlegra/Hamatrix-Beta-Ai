module.exports = {
  name: 'girldp6',
  description: 'Girl DP 6',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl6.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};