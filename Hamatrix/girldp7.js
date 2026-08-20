module.exports = {
  name: 'girldp7',
  description: 'Girl DP 7',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl7.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};