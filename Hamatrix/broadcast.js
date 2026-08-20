module.exports = {
  name: 'broadcast',
  description: 'Broadcast message to all groups',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const text = args.join(' ');
    if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a message.' });
    const groups = await sock.groupFetchAllParticipating();
    let sent = 0;
    for (const jid of Object.keys(groups)) {
      try {
        await sock.sendMessage(jid, { text: '📢 *BROADCAST*\n\n' + text });
        sent++;
      } catch {}
    }
    await sock.sendMessage(msg.key.remoteJid, { text: `✅ Broadcast sent to ${sent} groups.` });
  }
};