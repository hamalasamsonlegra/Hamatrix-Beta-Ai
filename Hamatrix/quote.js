const quotes = ["Be yourself; everyone else is already taken. - Oscar Wilde","The only way to do great work is to love what you do. - Steve Jobs","In the middle of difficulty lies opportunity. - Albert Einstein"];
module.exports = {
  name: 'quote',
  description: 'Random quote',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: quotes[Math.floor(Math.random()*quotes.length)] }, { quoted: msg });
  }
};