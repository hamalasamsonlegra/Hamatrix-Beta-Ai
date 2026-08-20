const fs = require('fs');
const path = require('path');

const BRANDING_PATH = path.join(__dirname, '..', 'branding.jpg');
let brandingBuffer = null;
try {
    brandingBuffer = fs.readFileSync(BRANDING_PATH);
} catch (e) {
    console.error('❌ branding.jpg not found:', e.message);
}

module.exports = {
    name: 'product',
    description: 'Send a product card using ourin-baileys buttons',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        if (!brandingBuffer) {
            await sock.sendMessage(jid, { text: '❌ branding.jpg not found in bot root.' });
            return;
        }

        try {
            const { Button, generateWAMessageFromContent } = await import('ourin-baileys');

            // Patch Button.build if needed
            if (Button.prototype.build) {
                Button.prototype.build = async function (jid, options = {}) {
                    const card = await this.toCard();
                    return generateWAMessageFromContent(
                        jid,
                        { ...(this._extraPayload || {}), interactiveMessage: { ...card, contextInfo: this._contextInfo } },
                        { ...(options || {}) }
                    );
                };
            }

            const btn = new Button(sock)
                .setTitle('🛍️ Hamatrix Premium Plan')
                .setBody('Unlimited access to all features.\n\nPrice: UGX 50,000\nSale: UGX 30,000')
                .setFooter('Limited time offer')
                .setImage(brandingBuffer)
                .addUrl('🛒 Buy Now', 'https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai')
                .addCopy('📋 Copy Code', 'SAVE20')
                .addReply('ℹ️ More Info', 'product_info');

            await btn.send(jid);
            console.log('✅ Product button card sent');
        } catch (e) {
            console.error('❌ Product error:', e);
            await sock.sendMessage(jid, { text: '❌ Product card failed: ' + e.message });
        }
    }
};
