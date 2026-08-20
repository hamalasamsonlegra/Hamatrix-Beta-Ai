module.exports = {
  name: 'girldp21',
  description: 'Girl DP 21',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl21.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};