module.exports = {
  name: 'girldp13',
  description: 'Girl DP 13',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl13.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};