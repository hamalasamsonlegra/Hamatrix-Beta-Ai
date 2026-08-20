module.exports = {
  name: 'spotifydl',
  description: 'Download Spotify track',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: '❌ Please provide a Spotify track URL.' });
    await sock.sendMessage(jid, { text: '⚠️ Spotify download is not yet configured. We recommend using .play to search YouTube.' }, { quoted: msg });
  }
};