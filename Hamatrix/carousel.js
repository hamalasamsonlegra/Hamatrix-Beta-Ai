const fs = require('fs');
const path = require('path');

// Local branding image path (same for all cards)
const BRANDING_PATH = path.join(__dirname, '..', 'branding.jpg');
let brandingBuffer = null;
try {
    brandingBuffer = fs.readFileSync(BRANDING_PATH);
} catch (e) {
    console.error('❌ branding.jpg not found:', e.message);
}

module.exports = {
    name: 'carousel',
    description: 'Send an example carousel using local branding image',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        if (!brandingBuffer) {
            await sock.sendMessage(jid, { text: '❌ branding.jpg not found in bot root.' });
            return;
        }

        try {
            const { Carousel, Button } = await import('ourin-baileys');

            // Helper to create a card from local image buffer
            const makeCard = async (title, bodyText, buttonText, buttonId) => {
                const b = new Button(sock)
                    .setTitle(title)
                    .setBody(bodyText)
                    .setImage(brandingBuffer)   // ← local buffer (no download)
                    .addReply(buttonText, buttonId);
                return await b.toCard();
            };

            // Create all three cards in parallel for speed
            const [card1, card2, card3] = await Promise.all([
                makeCard('🔥 Premium Plan', 'Unlimited access to all features', 'View', 'product_premium'),
                makeCard('🎵 Music Streaming', 'Listen to millions of songs', 'View', 'product_music'),
                makeCard('💻 Code Editor', 'Start coding instantly', 'View', 'product_code')
            ]);

            const carousel = new Carousel(sock)
                .setBody('🛍️ *Featured Products*')
                .setFooter('⬅️ Swipe left to see more');

            carousel.addCard([card1, card2, card3]);

            await carousel.send(jid);
            console.log('✅ Carousel sent (local image)');
        } catch (e) {
            console.error('❌ Carousel error:', e);
            await sock.sendMessage(jid, { text: '❌ Carousel error: ' + e.stack });
        }
    }
};
