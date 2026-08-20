module.exports = {
  name: 'restart',
  description: 'Restart bot',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    await sock.sendMessage(msg.key.remoteJid, { text: '🔄 Restarting...' });
    process.exit(0);
  }
};