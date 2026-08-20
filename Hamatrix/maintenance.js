module.exports = {
  name: 'maintenance',
  description: 'Owner command: maintenance',
  async execute(sock, msg, args) {
    // Simple owner check (you'll need to implement owner verification)
    const isOwner = true; // Replace with actual check
    if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'This command is for the owner only.' });
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *maintenance* executed.' }, { quoted: msg });
  }
};