module.exports = {
  name: 'ginfo',
  description: 'Show group information',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const { subject, desc, owner, size, creation } = metadata;
    const text = `📋 *Group Info*

    *Name:* ${subject}

    *Description:* ${desc || 'No description'}

    *Owner:* @${owner?.split('@')[0] || 'unknown'}

    *Members:* ${size || '?'}

    *Created:* ${new Date(creation * 1000).toDateString()}`;
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: [owner] });
  }
};