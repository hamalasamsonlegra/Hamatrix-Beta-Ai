module.exports = {
  name: 'nightcore',
  description: 'Media command: nightcore',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg) return sock.sendMessage(jid, { text: 'Reply to a media message.' });
    // Basic media processing (simplified)
    try {
      if (quotedMsg.imageMessage) {
        const media = await sock.downloadMediaMessage(msg);
        if (media) {
          await sock.sendMessage(jid, { image: media }, { quoted: msg });
        } else {
          await sock.sendMessage(jid, { text: 'Failed to process media.' });
        }
      } else {
        await sock.sendMessage(jid, { text: 'Unsupported media type.' });
      }
    } catch { await sock.sendMessage(jid, { text: 'Error processing media.' }); }
  }
};