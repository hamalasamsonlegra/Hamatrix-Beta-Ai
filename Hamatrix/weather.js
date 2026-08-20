const fetch = require('node-fetch');
module.exports = {
  name: 'weather',
  description: 'Get weather',
  async execute(sock, msg, args) {
    const city = args.join(' ');
    if (!city) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .weather <city>' });
    try {
      const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=%C+%t`);
      const text = await res.text();
      await sock.sendMessage(msg.key.remoteJid, { text: `Weather in ${city}: ${text}` }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Could not fetch weather.' });
    }
  }
};