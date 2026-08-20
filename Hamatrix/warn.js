const fs = require('fs');
const path = require('path');
const warnPath = path.join(__dirname, '..', 'data', 'warns.json');

function loadWarns() { try { return JSON.parse(fs.readFileSync(warnPath)); } catch { return {}; } }
function saveWarns(data) { fs.mkdirSync(path.dirname(warnPath), { recursive: true }); fs.writeFileSync(warnPath, JSON.stringify(data, null, 2)); }

module.exports = {
  name: 'warn',
  description: 'Warn a user',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention a user to warn.' });
    const warns = loadWarns();
    const groupId = msg.key.remoteJid;
    if (!warns[groupId]) warns[groupId] = {};
    mentioned.forEach(user => {
      if (!warns[groupId][user]) warns[groupId][user] = 0;
      warns[groupId][user]++;
    });
    saveWarns(warns);
    const list = mentioned.map(u => `@${u.split('@')[0]} (${warns[groupId][u]} warns)`).join(', ');
    await sock.sendMessage(groupId, { text: `⚠️ Warned: ${list}`, mentions: mentioned });
  }
};