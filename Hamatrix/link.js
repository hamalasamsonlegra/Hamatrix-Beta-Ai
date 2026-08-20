module.exports = {
  name: 'link',
  description: 'Get group invite link',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    try {
      const code = await sock.groupInviteCode(msg.key.remoteJid);
      const link = 'https://chat.whatsapp.com/' + code;
      await sock.sendMessage(msg.key.remoteJid, { text: `🔗 Group link: ${link}` });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Failed to fetch link. Make sure you have admin rights.' });
    }
  }
};