module.exports = {
  name: 'girldp18',
  description: 'Girl DP 18',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl18.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};