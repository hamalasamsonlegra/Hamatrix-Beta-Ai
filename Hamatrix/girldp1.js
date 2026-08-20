module.exports = {
  name: 'girldp1',
  description: 'Girl DP 1',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl1.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};