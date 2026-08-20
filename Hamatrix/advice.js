const fetch = require('node-fetch');
module.exports = {
  name: 'advice',
  description: 'Random advice',
  async execute(sock, msg, args) {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, { text: data.slip.advice }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: "You're doing great, keep going!" });
    }
  }
};