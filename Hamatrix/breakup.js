module.exports = {
  name: 'breakup',
  description: 'Breakup with mentioned user',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 1) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to breakup with!' }, { quoted: msg });
    await sock.sendMessage(msg.key.remoteJid, { text: `💔 @${msg.key.participant?.split('@')[0] || msg.key.remoteJid.split('@')[0]} broke up with @${mentioned[0].split('@')[0]}...`, mentions: [msg.key.participant || msg.key.remoteJid, mentioned[0]] }, { quoted: msg });
  }
};