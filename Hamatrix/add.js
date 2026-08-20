module.exports = {
  name: 'add',
  description: 'Add a member to the group',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    let target;
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length) {
      target = mentioned[0];
    } else {
      const number = args[0]?.replace(/[^0-9]/g, '');
      if (!number) return sock.sendMessage(msg.key.remoteJid, { text: '❌ Mention someone or provide a phone number with country code.' }, { quoted: msg });
      target = number + '@s.whatsapp.net';
    }
    try {
      await sock.groupParticipantsUpdate(msg.key.remoteJid, [target], 'add');
      await sock.sendMessage(msg.key.remoteJid, { text: `✅ Added @${target.split('@')[0]}`, mentions: [target] });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Failed to add user. They might have privacy settings enabled.' });
    }
  }
};