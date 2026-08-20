const fs = require('fs');
const path = require('path');
const settingsPath = '/data/data/com.termux/files/home/data/settings.json';

function loadSettings() {
  try { return JSON.parse(fs.readFileSync(settingsPath, 'utf8')); } catch { return {}; }
}
function saveSettings(data) {
  fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
}

module.exports = {
  name: 'welcome',
  description: 'Toggle welcome message for new members',
  async execute(sock, msg, args) {
    
    if (!msg.key.remoteJid.endsWith('@g.us')) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ This command can only be used in a group.' }, { quoted: msg });
    }

    
    const groupMetadata = await sock.groupMetadata(msg.key.remoteJid);
    const participant = groupMetadata.participants.find(p => p.id === (msg.key.participant || msg.key.remoteJid));
    if (!participant || !participant.admin && participant.id !== global.ownerNumbers[0]) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ You must be an admin to use this command.' }, { quoted: msg });
    }

    const chatId = msg.key.remoteJid;
    const settings = loadSettings();
    if (!settings[chatId]) settings[chatId] = {};
    const action = args[0]?.toLowerCase();
    if (action === 'on') {
      settings[chatId].welcome = true;
    } else if (action === 'off') {
      settings[chatId].welcome = false;
    } else {
      settings[chatId].welcome = !settings[chatId].welcome;
    }
    saveSettings(settings);
    const state = settings[chatId].welcome ? 'ON' : 'OFF';
    await sock.sendMessage(chatId, { text: `✅ Welcome message is now *${state}*.` });
  }
};