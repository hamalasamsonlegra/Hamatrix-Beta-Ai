module.exports = {
  name: 'setgcdesc',
  description: 'Change group description',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    const newDesc = args.join(' ');
    try {
      await sock.groupUpdateDescription(msg.key.remoteJid, newDesc);
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Group description updated.' });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Failed to update description.' });
    }
  }
};