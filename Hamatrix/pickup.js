const lines = ["Are you a magician? Because whenever I look at you, everyone else disappears.","Do you have a map? I keep getting lost in your eyes.","Is your name Google? Because you have everything I've been searching for."];
module.exports = {
  name: 'pickup',
  description: 'Pickup line',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: lines[Math.floor(Math.random()*lines.length)] }, { quoted: msg });
  }
};