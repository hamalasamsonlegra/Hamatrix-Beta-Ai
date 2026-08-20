module.exports = {
  name: 'girldp14',
  description: 'Girl DP 14',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl14.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};