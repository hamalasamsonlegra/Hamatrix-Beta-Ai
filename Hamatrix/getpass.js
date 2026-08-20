module.exports = {
  name: 'getpass',
  description: 'Get current dashboard password',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const pass = global.dashboardPassword || 'Not set';
    // Bypass fancy formatting by using original send if available
    if (sock._originalSend) {
      await sock._originalSend(jid, { text: `🔑 Dashboard password: ${pass}` });
    } else {
      await sock.sendMessage(jid, { text: `🔑 Dashboard password: ${pass}` });
    }
  }
};
