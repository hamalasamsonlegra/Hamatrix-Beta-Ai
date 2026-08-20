const facts = ["Honey never spoils.","Octopuses have three hearts.","A day on Venus is longer than a year on Venus."];
module.exports = {
  name: 'fact',
  description: 'Random fact',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: facts[Math.floor(Math.random()*facts.length)] }, { quoted: msg });
  }
};