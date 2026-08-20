module.exports = {
  name: 'girldp11',
  description: 'Girl DP 11',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl11.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};