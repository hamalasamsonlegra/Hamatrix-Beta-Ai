module.exports = {
  name: 'leave',
  description: 'Leave a group',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return sock.sendMessage(jid, { text: 'This command works only in groups.' });
    await sock.groupLeave(jid);
  }
};