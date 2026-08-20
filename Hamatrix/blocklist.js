module.exports = {
  name: 'blocklist',
  description: 'Show blocked users',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const list = await sock.fetchBlocklist();
    if (list.length === 0) {
      return sock.sendMessage(msg.key.remoteJid, { text: 'No blocked users.' });
    }
    let text = '🚫 *Blocked Users:*\n';
    list.forEach((user, i) => {
      text += `${i+1}. @${user.split('@')[0]}\n`;
    });
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: list });
  }
};