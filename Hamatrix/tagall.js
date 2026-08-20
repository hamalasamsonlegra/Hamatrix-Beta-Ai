module.exports = {
  name: 'tagall',
  description: 'Tag all group members',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    const ownerJid = global.ownerNumbers[0];
    const sender = msg.key.participant || msg.key.remoteJid;

    if (sender !== ownerJid && (!participant || !participant.admin)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin or the bot owner to use this command.' }, { quoted: msg });
    }

    const participants = groupMetadata.participants.map(p => p.id);
    const text = args.join(' ') || 'Attention everyone!';
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: participants });
  }
};
