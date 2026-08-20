module.exports = {
  name: 'girldp19',
  description: 'Girl DP 19',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl19.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};