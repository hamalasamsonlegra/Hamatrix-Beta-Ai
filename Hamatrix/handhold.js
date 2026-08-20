const fetch = require('node-fetch');

module.exports = {
  name: 'handhold',
  description: 'Send a handhold GIF',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || '';
    const targetName = target ? '@' + target.split('@')[0] : 'you';

    try {
      const res = await fetch(`https://api.otakugifs.xyz/gif?reaction=${'handhold'}&format=gif`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, {
          video: { url: data.url },
          gifPlayback: true,
          caption: `${'handhold'}! ${targetName}`,
          mentions: target ? [target] : []
        }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: `*${'handhold'.toUpperCase()}!* ${targetName} (API down)` }, { quoted: msg });
      }
    } catch {
      await sock.sendMessage(jid, { text: `*${'handhold'.toUpperCase()}!* ${targetName}` }, { quoted: msg });
    }
  }
};