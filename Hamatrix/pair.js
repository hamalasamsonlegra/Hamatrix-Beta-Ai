module.exports = {
  name: 'pair',
  description: 'Get a new pairing code (owner)',
  async execute(sock, msg, args) {
    const sender = msg.key.participant || msg.key.remoteJid;
  if (!global.ownerNumbers.includes(sender)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Owner only.' });
    }
    const number = args[0]?.replace(/[^0-9]/g, '');
    if (!number) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a phone number with country code.' });
    try {
      const code = await sock.requestPairingCode(number);
      await sock.sendMessage(msg.key.remoteJid, { text: `🔑 Pairing code: *${code.match(/.{1,4}/g).join('-')}*` });
    } catch(e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to request pairing code.' });
    }
  }
};