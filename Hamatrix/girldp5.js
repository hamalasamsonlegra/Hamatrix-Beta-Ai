module.exports = {
  name: 'girldp5',
  description: 'Girl DP 5',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl5.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};