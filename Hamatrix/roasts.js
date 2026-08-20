const roasts = ["You're not stupid; you just have bad luck thinking.","I'd agree with you, but then we'd both be wrong.","Even WiFi has more connections than you."];
module.exports = {
  name: 'roast',
  description: 'Roast someone',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    const target = mentioned.length ? `@${mentioned[0].split('@')[0]}` : 'you';
    await sock.sendMessage(msg.key.remoteJid, { text: `🔥 ${target}, ${roasts[Math.floor(Math.random()*roasts.length)]}`, mentions: mentioned }, { quoted: msg });
  }
};