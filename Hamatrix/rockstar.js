module.exports = {
  name: 'rockstar',
  description: 'Command: rockstar',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *rockstar* is active.' }, { quoted: msg });
  }
};