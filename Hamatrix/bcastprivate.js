module.exports = {
  name: 'bcastprivate',
  description: 'Broadcast to private chats',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const text = args.join(' ');
    if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a message.' });
    // Get all chats (simplified – might need to store contacts)
    const chats = await sock.getChats();
    let sent = 0;
    for (const chat of chats) {
      if (chat.id.endsWith('@g.us')) continue; // skip groups
      try {
        await sock.sendMessage(chat.id, { text });
        sent++;
      } catch {}
    }
    await sock.sendMessage(msg.key.remoteJid, { text: `✅ Broadcast sent to ${sent} private chats.` });
  }
};