module.exports = {
  name: 'girldp12',
  description: 'Girl DP 12',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl12.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};