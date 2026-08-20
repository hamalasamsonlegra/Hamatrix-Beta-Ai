const fs = require('fs');
const path = require('path');
const banPath = path.join(__dirname, '..', 'data', 'bans.json');

function loadBans() { try { return JSON.parse(fs.readFileSync(banPath)); } catch { return {}; } }
function saveBans(data) { fs.mkdirSync(path.dirname(banPath), { recursive: true }); fs.writeFileSync(banPath, JSON.stringify(data, null, 2)); }

module.exports = {
  name: 'ban',
  description: 'Ban a user from group',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention a user to ban.' });
    const groupId = msg.key.remoteJid;
    const bans = loadBans();
    if (!bans[groupId]) bans[groupId] = [];
    for (const user of mentioned) {
      if (!bans[groupId].includes(user)) bans[groupId].push(user);
      await sock.groupParticipantsUpdate(groupId, [user], 'remove');
    }
    saveBans(bans);
    await sock.sendMessage(groupId, { text: '🚫 Banned and removed.' });
  }
};