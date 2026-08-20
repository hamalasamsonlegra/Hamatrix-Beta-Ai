module.exports = {
  name: 'girldp17',
  description: 'Girl DP 17',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl17.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};