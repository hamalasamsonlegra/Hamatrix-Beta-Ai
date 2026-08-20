const fs = require('fs');
const path = require('path');

const HAMATRIX_DIR = path.join(__dirname, 'Hamatrix');

// Helper to write a command file
function writeCmd(name, code) {
    fs.writeFileSync(path.join(HAMATRIX_DIR, name + '.js'), code);
}

const ownerJid = '256795312914@s.whatsapp.net'; // CHANGE THIS TO YOUR REAL OWNER NUMBER

// ------------------------------------------------------------------
// 1. BLOCK / UNBLOCK / BLOCKLIST
// ------------------------------------------------------------------
writeCmd('block', `module.exports = {
  name: 'block',
  description: 'Block a user',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) {
      const number = args[0]?.replace(/[^0-9]/g, '');
      if (!number) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention or provide a number.' });
      mentioned.push(number + '@s.whatsapp.net');
    }
    for (const user of mentioned) {
      await sock.updateBlockStatus(user, 'block');
      await sock.sendMessage(msg.key.remoteJid, { text: \`🚫 Blocked @\${user.split('@')[0]}\`, mentions: [user] });
    }
  }
};`);

writeCmd('unblock', `module.exports = {
  name: 'unblock',
  description: 'Unblock a user',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) {
      const number = args[0]?.replace(/[^0-9]/g, '');
      if (!number) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention or provide a number.' });
      mentioned.push(number + '@s.whatsapp.net');
    }
    for (const user of mentioned) {
      await sock.updateBlockStatus(user, 'unblock');
      await sock.sendMessage(msg.key.remoteJid, { text: \`✅ Unblocked @\${user.split('@')[0]}\`, mentions: [user] });
    }
  }
};`);

writeCmd('blocklist', `module.exports = {
  name: 'blocklist',
  description: 'Show blocked users',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const list = await sock.fetchBlocklist();
    if (list.length === 0) {
      return sock.sendMessage(msg.key.remoteJid, { text: 'No blocked users.' });
    }
    let text = '🚫 *Blocked Users:*\\n';
    list.forEach((user, i) => {
      text += \`\${i+1}. @\${user.split('@')[0]}\\n\`;
    });
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: list });
  }
};`);

// ------------------------------------------------------------------
// 2. LEAVE GROUP
// ------------------------------------------------------------------
writeCmd('leave', `module.exports = {
  name: 'leave',
  description: 'Leave a group',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return sock.sendMessage(jid, { text: 'This command works only in groups.' });
    await sock.groupLeave(jid);
  }
};`);

// ------------------------------------------------------------------
// 3. HIDETAG
// ------------------------------------------------------------------
writeCmd('hidetag', `module.exports = {
  name: 'hidetag',
  description: 'Hidden tag all members',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const group = await sock.groupMetadata(msg.key.remoteJid);
    const participants = group.participants.map(p => p.id);
    const text = '\\u200e'; // invisible character
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: participants });
  }
};`);

// ------------------------------------------------------------------
// 4. AUTOREAD / AUTOVIEWSTATUS / ANTILINK / ANTIDELETE etc.
//    These toggle settings and store them in a local JSON file.
// ------------------------------------------------------------------
const toggleSettings = [
  'autoread', 'autoviewstatus', 'autolikestauts', 'autorecording', 'autotyping',
  'antilink', 'antidelete', 'antiedit', 'antiviewonce', 'antispam', 'antibadword',
  'antibot', 'flood', 'antigroupmention', 'antifwd'
];

toggleSettings.forEach(cmd => {
  writeCmd(cmd, `const fs = require('fs');
const path = require('path');
const settingsPath = path.join(__dirname, '..', 'data', 'settings.json');

function loadSettings() {
  try {
    return JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
  } catch { return {}; }
}
function saveSettings(data) {
  fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
}

module.exports = {
  name: '${cmd}',
  description: 'Toggle ${cmd}',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const chatId = msg.key.remoteJid;
    const settings = loadSettings();
    if (!settings[chatId]) settings[chatId] = {};
    const current = settings[chatId]['${cmd}'] === true;
    const action = args[0]?.toLowerCase();
    if (action === 'on' || action === 'off') {
      settings[chatId]['${cmd}'] = action === 'on';
    } else {
      settings[chatId]['${cmd}'] = !current; // toggle
    }
    saveSettings(settings);
    const state = settings[chatId]['${cmd}'] ? 'ON' : 'OFF';
    await sock.sendMessage(chatId, { text: \`✅ *${cmd}* is now *\${state}*.\` }, { quoted: msg });
  }
};`);
});

// ------------------------------------------------------------------
// 5. WARN / BAN (simplified) – stores warns in a JSON file
// ------------------------------------------------------------------
writeCmd('warn', `const fs = require('fs');
const path = require('path');
const warnPath = path.join(__dirname, '..', 'data', 'warns.json');

function loadWarns() { try { return JSON.parse(fs.readFileSync(warnPath)); } catch { return {}; } }
function saveWarns(data) { fs.mkdirSync(path.dirname(warnPath), { recursive: true }); fs.writeFileSync(warnPath, JSON.stringify(data, null, 2)); }

module.exports = {
  name: 'warn',
  description: 'Warn a user',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
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
    const list = mentioned.map(u => \`@\${u.split('@')[0]} (\${warns[groupId][u]} warns)\`).join(', ');
    await sock.sendMessage(groupId, { text: \`⚠️ Warned: \${list}\`, mentions: mentioned });
  }
};`);

writeCmd('ban', `const fs = require('fs');
const path = require('path');
const banPath = path.join(__dirname, '..', 'data', 'bans.json');

function loadBans() { try { return JSON.parse(fs.readFileSync(banPath)); } catch { return {}; } }
function saveBans(data) { fs.mkdirSync(path.dirname(banPath), { recursive: true }); fs.writeFileSync(banPath, JSON.stringify(data, null, 2)); }

module.exports = {
  name: 'ban',
  description: 'Ban a user from group',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
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
};`);

// ------------------------------------------------------------------
// 6. BROADCAST / BCASTPRIVATE
// ------------------------------------------------------------------
writeCmd('broadcast', `module.exports = {
  name: 'broadcast',
  description: 'Broadcast message to all groups',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const text = args.join(' ');
    if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a message.' });
    const groups = await sock.groupFetchAllParticipating();
    let sent = 0;
    for (const jid of Object.keys(groups)) {
      try {
        await sock.sendMessage(jid, { text: '📢 *BROADCAST*\\n\\n' + text });
        sent++;
      } catch {}
    }
    await sock.sendMessage(msg.key.remoteJid, { text: \`✅ Broadcast sent to \${sent} groups.\` });
  }
};`);

writeCmd('bcastprivate', `module.exports = {
  name: 'bcastprivate',
  description: 'Broadcast to private chats',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
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
    await sock.sendMessage(msg.key.remoteJid, { text: \`✅ Broadcast sent to \${sent} private chats.\` });
  }
};`);

// ------------------------------------------------------------------
// 7. OTHER OWNER COMMANDS (setprefix, setppbot, restart, etc.)
// ------------------------------------------------------------------
writeCmd('setprefix', `module.exports = {
  name: 'setprefix',
  description: 'Change command prefix',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const newPrefix = args[0];
    if (!newPrefix || newPrefix.length > 3) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .setprefix <new_prefix>' });
    // Update prefix in memory (global)
    global.prefix = newPrefix;
    await sock.sendMessage(msg.key.remoteJid, { text: \`✅ Prefix changed to *\${newPrefix}*\` });
  }
};`);

writeCmd('setppbot', `module.exports = {
  name: 'setppbot',
  description: 'Set bot profile picture',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg?.imageMessage) return sock.sendMessage(msg.key.remoteJid, { text: 'Reply to an image.' });
    try {
      const media = await sock.downloadMediaMessage(msg);
      await sock.updateProfilePicture(sock.user.id, media);
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Profile picture updated.' });
    } catch(e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to update picture.' });
    }
  }
};`);

writeCmd('restart', `module.exports = {
  name: 'restart',
  description: 'Restart bot',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    await sock.sendMessage(msg.key.remoteJid, { text: '🔄 Restarting...' });
    process.exit(0);
  }
};`);

writeCmd('shutdown', `module.exports = {
  name: 'shutdown',
  description: 'Shut down bot',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    await sock.sendMessage(msg.key.remoteJid, { text: '🛑 Shutting down...' });
    process.exit(0);
  }
};`);

writeCmd('pair', `module.exports = {
  name: 'pair',
  description: 'Get a new pairing code (owner)',
  async execute(sock, msg, args) {
    if (msg.key.participant ? msg.key.participant !== '${ownerJid}' : msg.key.remoteJid !== '${ownerJid}') {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const number = args[0]?.replace(/[^0-9]/g, '');
    if (!number) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a phone number with country code.' });
    try {
      const code = await sock.requestPairingCode(number);
      await sock.sendMessage(msg.key.remoteJid, { text: \`🔑 Pairing code: *\${code.match(/.{1,4}/g).join('-')}*\` });
    } catch(e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to request pairing code.' });
    }
  }
};`);

console.log('✅ Owner commands created with real functionality.');
