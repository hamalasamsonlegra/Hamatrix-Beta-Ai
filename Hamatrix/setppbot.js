module.exports = {
  name: 'setppbot',
  description: 'Set bot profile picture',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg?.imageMessage) return sock.sendMessage(msg.key.remoteJid, { text: 'Reply to an image.' });
    try {
      const media = await sock.downloadMediaMessage(msg);
      await sock.updateProfilePicture(sock.user.id, media);
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Profile picture updated.' });
    } catch(e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to update picture.' });
    }
  }
};