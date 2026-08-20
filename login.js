const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function login() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        browser: ['Ubuntu', 'Chrome', '20.0.0']
    });

    let asked = false;

    sock.ev.on('connection.update', async ({ qr, connection }) => {
        if (qr && !asked) {
            asked = true;
            rl.question('Enter your phone number (with country code, no +): ', async (phone) => {
                rl.close();
                try {
                    const code = await sock.requestPairingCode(phone.trim());
                    console.log('\n🔑 Your pairing code:', code);
                    console.log('Open WhatsApp → Linked Devices → Link with phone number → enter this code.\n');
                } catch (err) {
                    console.error('Failed to request pairing code:', err);
                    process.exit(1);
                }
            });
        }
        if (connection === 'open') {
            console.log('✅ Successfully connected! Press CTRL+C to stop.');
        }
    });

    sock.ev.on('creds.update', saveCreds);
}
login();
