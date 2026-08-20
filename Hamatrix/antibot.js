const fs = require('fs');
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
  name: 'antibot',
  description: 'Toggle antibot',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const chatId = msg.key.remoteJid;
    const settings = loadSettings();
    if (!settings[chatId]) settings[chatId] = {};
    const current = settings[chatId]['antibot'] === true;
    const action = args[0]?.toLowerCase();
    if (action === 'on' || action === 'off') {
      settings[chatId]['antibot'] = action === 'on';
    } else {
      settings[chatId]['antibot'] = !current; // toggle
    }
    saveSettings(settings);
    const state = settings[chatId]['antibot'] ? 'ON' : 'OFF';
    await sock.sendMessage(chatId, { text: `✅ *antibot* is now *${state}*.` }, { quoted: msg });
  }
};