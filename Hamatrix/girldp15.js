module.exports = {
  name: 'girldp15',
  description: 'Girl DP 15',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl15.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};