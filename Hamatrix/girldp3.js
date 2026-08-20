module.exports = {
  name: 'girldp3',
  description: 'Girl DP 3',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl3.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};