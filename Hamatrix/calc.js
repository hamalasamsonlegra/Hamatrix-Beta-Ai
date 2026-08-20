module.exports = {
  name: 'calc',
  description: 'Calculator',
  async execute(sock, msg, args) {
    const expr = args.join(' ');
    try {
      const result = eval(expr); // caution: use safely
      await sock.sendMessage(msg.key.remoteJid, { text: `${expr} = *${result}*` }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Invalid expression.' });
    }
  }
};