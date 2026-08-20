module.exports = {
  name: 'unblock',
  description: 'Unblock a user',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) {
      const number = args[0]?.replace(/[^0-9]/g, '');
      if (!number) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention or provide a number.' });
      mentioned.push(number + '@s.whatsapp.net');
    }
    for (const user of mentioned) {
      await sock.updateBlockStatus(user, 'unblock');
      await sock.sendMessage(msg.key.remoteJid, { text: `✅ Unblocked @${user.split('@')[0]}`, mentions: [user] });
    }
  }
};