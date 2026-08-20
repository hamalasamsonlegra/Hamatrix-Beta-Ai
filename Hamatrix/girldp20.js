module.exports = {
  name: 'girldp20',
  description: 'Girl DP 20',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl20.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};