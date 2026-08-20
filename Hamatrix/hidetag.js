module.exports = {
  name: 'hidetag',
  description: 'Hidden tag (owner only)',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const ownerJid = global.ownerNumbers[0];
    const sender = msg.key.participant || msg.key.remoteJid;
    if (sender !== ownerJid) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command is for the bot owner only.' }, { quoted: msg });
    }

    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participants = groupMetadata.participants.map(p => p.id);
    const text = '\u200e';
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: participants });
  }
};