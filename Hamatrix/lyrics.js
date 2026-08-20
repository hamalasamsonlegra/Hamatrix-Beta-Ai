const fetch = require('node-fetch');
module.exports = {
  name: 'lyrics',
  description: 'Get song lyrics',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const fullText = args.join(' ');
    if (!fullText.includes(' - ')) return sock.sendMessage(jid, { text: '❌ Usage: .lyrics Artist - Song Title' }, { quoted: msg });
    const [artist, title] = fullText.split(' - ').map(s => s.trim());
    try {
      const res = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      const data = await res.json();
      if (data.lyrics) {
        await sock.sendMessage(jid, { text: `🎵 *${artist} - ${title}*\n\n${data.lyrics.substring(0, 4000)}` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Lyrics not found.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Lyrics service is down.' });
    }
  }
};