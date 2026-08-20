module.exports = {
  name: 'left',
  description: 'Show members who left recently (not available)',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: '⚠️ This information is not accessible via WhatsApp API.' });
  }
};