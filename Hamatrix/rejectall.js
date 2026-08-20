module.exports = {
  name: 'rejectall',
  description: 'Reject all pending join requests',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    try {
      const requests = await sock.groupRequestParticipantsList(msg.key.remoteJid);
      if (!requests || requests.length === 0) return sock.sendMessage(msg.key.remoteJid, { text: 'No pending join requests.' });
      for (const req of requests) {
        await sock.groupRequestParticipantsUpdate(msg.key.remoteJid, [req.jid], 'reject');
      }
      await sock.sendMessage(msg.key.remoteJid, { text: `❌ Rejected ${requests.length} join requests.` });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Failed to process requests.' });
    }
  }
};