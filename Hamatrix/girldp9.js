module.exports = {
  name: 'girldp9',
  description: 'Girl DP 9',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl9.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};