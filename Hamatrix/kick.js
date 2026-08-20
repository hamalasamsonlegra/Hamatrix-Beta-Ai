module.exports = {
  name: 'kick',
  description: 'Kick a member from the group',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: '❌ Mention someone to kick.' }, { quoted: msg });
    for (const user of mentioned) {
      try {
        await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], 'remove');
        await sock.sendMessage(msg.key.remoteJid, { text: `🚪 Kicked @${user.split('@')[0]}`, mentions: [user] });
      } catch {
        await sock.sendMessage(msg.key.remoteJid, { text: `❌ Failed to kick @${user.split('@')[0]}.` });
      }
    }
  }
};