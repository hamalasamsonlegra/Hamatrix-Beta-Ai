module.exports = {
  name: 'hack',
  description: 'Fake hack prank',
  async execute(sock, msg, args) {
    const target = args[0] || 'unknown';
    const steps = ["🔍 Finding IP...","🔓 Bypassing firewall...","📡 Connecting to satellite...","💾 Downloading data...","✅ Hack complete! Just kidding."];
    for (const step of steps) {
      await new Promise(r => setTimeout(r, 800));
      await sock.sendMessage(msg.key.remoteJid, { text: step }, { quoted: msg });
    }
  }
};