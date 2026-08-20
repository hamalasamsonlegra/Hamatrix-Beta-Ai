// Reuses the same menu code but under alias
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'help',
    description: 'Show all available commands',
    async execute(sock, msg, args) {
        const commandFiles = fs.readdirSync(path.join(__dirname)).filter(f => f.endsWith('.js') && f !== 'help.js');
        const commands = commandFiles.map(f => {
            const cmd = require(path.join(__dirname, f));
            return `◦ *.${cmd.name}* — ${cmd.description}`;
        });
        const menuText = `🤖 *HAMATRIX BETA AI*\n\n📜 *Available Commands:*\n${commands.join('\n')}`;
        await sock.sendMessage(msg.key.remoteJid, { text: menuText });
    }
};
