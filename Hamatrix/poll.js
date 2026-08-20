module.exports = {
  name: 'poll',
  description: 'Create a poll',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    const fullText = args.join(' ');
    if (!fullText.includes('|')) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Usage: .poll question | option1 | option2 | ...' }, { quoted: msg });
    }
    const [question, ...options] = fullText.split('|').map(s => s.trim()).filter(s => s);
    if (options.length < 2) return sock.sendMessage(msg.key.remoteJid, { text: '❌ Provide at least two options.' });
    await sock.sendMessage(msg.key.remoteJid, {
      poll: {
        name: question,
        values: options,
        selectableCount: 1
      }
    });
  }
};