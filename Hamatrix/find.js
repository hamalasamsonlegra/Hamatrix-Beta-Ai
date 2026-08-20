module.exports = {
  name: 'find',
  description: 'Find a member in the group by name/number',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    const query = args.join(' ').toLowerCase();
    if (!query) return sock.sendMessage(msg.key.remoteJid, { text: '❌ Provide a name or number to search.' });
    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const found = metadata.participants.filter(p => {
      const name = p.name?.toLowerCase() || '';
      const num = p.id.split('@')[0];
      return name.includes(query) || num.includes(query);
    });
    if (!found.length) return sock.sendMessage(msg.key.remoteJid, { text: 'No matching members found.' });
    let text = '🔍 *Search Results:*\n';
    found.forEach(p => {
      text += `- @${p.id.split('@')[0]} (${p.name || 'N/A'})\n`;
    });
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: found.map(p => p.id) });
  }
};