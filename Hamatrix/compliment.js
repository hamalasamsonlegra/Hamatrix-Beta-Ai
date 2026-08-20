const compliments = ["You look great today!","You're an awesome person!","You light up the room!","You're a gift to those around you."];
module.exports = {
  name: 'compliment',
  description: 'Give a compliment',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: compliments[Math.floor(Math.random()*compliments.length)] }, { quoted: msg });
  }
};