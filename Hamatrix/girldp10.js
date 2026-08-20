module.exports = {
  name: 'girldp10',
  description: 'Girl DP 10',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl10.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};