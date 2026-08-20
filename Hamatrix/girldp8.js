module.exports = {
  name: 'girldp8',
  description: 'Girl DP 8',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl8.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};