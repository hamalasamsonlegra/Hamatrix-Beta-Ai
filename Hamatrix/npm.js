const fetch = require('node-fetch');
module.exports = {
  name: 'npm',
  description: 'Search npm package',
  async execute(sock, msg, args) {
    const pkg = args[0];
    if (!pkg) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .npm <package>' });
    try {
      const res = await fetch(`https://registry.npmjs.org/${pkg}`);
      const data = await res.json();
      if (data.name) {
        await sock.sendMessage(msg.key.remoteJid, { text: `*NPM Package:* ${data.name}
*Description:* ${data.description || 'N/A'}
*Latest:* ${data['dist-tags']?.latest}` }, { quoted: msg });
      } else {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Package not found.' });
      }
    } catch { await sock.sendMessage(msg.key.remoteJid, { text: 'Error fetching package info.' }); }
  }
};