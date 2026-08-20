module.exports = {
  name: '8ball',
  description: 'Magic 8-ball',
  async execute(sock, msg, args) {
    const responses = ["Yes","No","Maybe","Ask again later","Definitely","I don't think so","Of course!","Not a chance"];
    const ans = responses[Math.floor(Math.random()*responses.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `🎱 ${ans}` }, { quoted: msg });
  }
};