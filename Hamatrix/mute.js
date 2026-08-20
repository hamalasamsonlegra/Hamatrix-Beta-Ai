module.exports = {
  name: 'mute',
  description: 'Mute a member (remove send permissions)',
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
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: '❌ Mention someone to mute.' });
    // Muting is simulated by setting group to only admins can send (temporary)
    // Alternatively, kick and re-add, but we'll just toggle group announce for now.
    // This is a simplified version.
    await sock.groupSettingUpdate(msg.key.remoteJid, 'announcement');
    await sock.sendMessage(msg.key.remoteJid, { text: '🔇 Group has been set to *announcement mode* (only admins can send). Use .unmute to disable.' });
  }
};