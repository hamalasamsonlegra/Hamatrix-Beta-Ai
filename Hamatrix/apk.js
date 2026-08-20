const fetch = require('node-fetch');
module.exports = {
  name: 'apk',
  description: 'Search for APK apps',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const query = args.join(' ');
    if (!query) return sock.sendMessage(jid, { text: '❌ Provide an app name to search.' });
    try {
      const res = await fetch('https://api.akuari.my.id/search/apk?query=' + encodeURIComponent(query));
      const data = await res.json();
      if (data.status && data.result && data.result.length) {
        let text = '📱 *APK Search Results:*\n';
        data.result.slice(0, 5).forEach((app, i) => {
          text += `${i+1}. ${app.name}\n   ${app.url}\n`;
        });
        await sock.sendMessage(jid, { text }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ No APK found.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Service unavailable.' });
    }
  }
};