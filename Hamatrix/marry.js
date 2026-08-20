module.exports = {
  name: 'marry',
  description: 'Marry a mentioned user',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 1) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to marry!' }, { quoted: msg });
    await sock.sendMessage(msg.key.remoteJid, { text: `💒 @${msg.key.participant?.split('@')[0] || msg.key.remoteJid.split('@')[0]} marries @${mentioned[0].split('@')[0]}! Congrats!`, mentions: [msg.key.participant || msg.key.remoteJid, mentioned[0]] }, { quoted: msg });
  }
};