module.exports = {
  name: 'ship',
  description: 'Ship two users',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 2) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention two users to ship!' }, { quoted: msg });
    const love = Math.floor(Math.random() * 101);
    await sock.sendMessage(msg.key.remoteJid, { text: `❤️ Compatibility between @${mentioned[0].split('@')[0]} and @${mentioned[1].split('@')[0]} is *${love}%*`, mentions: [mentioned[0], mentioned[1]] }, { quoted: msg });
  }
};