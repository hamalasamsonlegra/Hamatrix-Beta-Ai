const jokes = ["Why do programmers prefer dark mode? Because light attracts bugs!","Why did the developer go broke? He used up all his cache.","How many programmers does it take to change a light bulb? None, that's a hardware problem."];
module.exports = {
  name: 'joke',
  description: 'Random joke',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: jokes[Math.floor(Math.random()*jokes.length)] }, { quoted: msg });
  }
};