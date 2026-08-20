module.exports = {
  name: 'genius',
  description: 'Command: genius',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *genius* is active.' }, { quoted: msg });
  }
};