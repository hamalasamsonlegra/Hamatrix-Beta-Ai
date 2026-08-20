import { startHamatrix, onMessages, sendText } from './hamatrix.js';

const sock = await startHamatrix({ printQR: true, browserName: 'hamatrix' });

onMessages(sock, async ({ sock, text, jid }) => {
  await sendText(sock, jid, `Echo: ${text}`);
});

console.log('🤖 QR mode active. Scan the QR code.');
