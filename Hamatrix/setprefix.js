module.exports = {
    name: 'setprefix',
    description: 'Change the command prefix (owner only)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        // 👑 Only allow if message is from the bot's own account (fromMe)
        if (!msg.key.fromMe) {
            return sock.sendMessage(jid, { text: '❌ This command is for the bot owner only.' }, { quoted: msg });
        }

        const newPrefix = args[0];
        if (!newPrefix || newPrefix.length > 3) {
            return sock.sendMessage(jid, { text: '❌ Usage: .setprefix <new_prefix> (max 3 characters)' }, { quoted: msg });
        }

        global.prefix = newPrefix;

        await sock.sendMessage(jid, { text: `✅ Prefix changed to *${newPrefix}*` }, { quoted: msg });
    }
};
