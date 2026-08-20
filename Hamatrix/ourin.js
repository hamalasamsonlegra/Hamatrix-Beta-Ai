module.exports = {
    name: 'ourin',
    description: 'Test multiple ourin-baileys interactive messages',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Helper to send a text label
        const label = async (text) => {
            await sock.sendMessage(jid, { text: `━━━━━━━━━━━━━━━\n${text}\n━━━━━━━━━━━━━━━` });
            await sleep(800);
        };

        // Run each test independently so one failure doesn't stop everything
        const runTest = async (testName, testFn) => {
            try {
                await label(testName);
                await testFn();
                await sleep(1500);
            } catch (e) {
                console.error(`❌ [${testName}] error:`, e.message);
                await sock.sendMessage(jid, { text: `❌ ${testName} failed: ${e.message}` });
                await sleep(1000);
            }
        };

        try {
            const ourin = await import('ourin-baileys');
            const { Button, ORich, Carousel, generateWAMessageFromContent } = ourin;

            // ─── PATCH Button.build (known bug) ─────────────────
            if (Button.prototype.build) {
                const originalBuild = Button.prototype.build;
                Button.prototype.build = async function (jid, options = {}) {
                    const card = await this.toCard();
                    return generateWAMessageFromContent(
                        jid,
                        {
                            ...(this._extraPayload || {}),
                            interactiveMessage: { ...card, contextInfo: this._contextInfo }
                        },
                        { ...(options || {}) }
                    );
                };
            }
            // ─── END PATCH ─────────────────────────────────────

            // 1. Native-flow buttons
            await runTest('🔘 Native-flow buttons', async () => {
                const btn = new Button(sock)
                    .setBody('Choose an action')
                    .setFooter('Powered by Hamatrix')
                    .addUrl('Website', 'https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai')
                    .addCopy('Copy Code', 'SAVE20')
                    .addReply('Help', 'help')
                    .addSelection('More')
                    .makeSection('Account')
                    .makeRow('', 'Profile', 'View profile', 'profile')
                    .makeRow('', 'Settings', 'Manage settings', 'settings');
                await btn.send(jid);
            });

            // 2. List / Sheet
            await runTest('📂 List / Sheet', async () => {
                const listBtn = new Button(sock)
                    .setBody('Select a category')
                    .setFooter('© Hamatrix')
                    .addSelection('Categories')
                    .makeSection('General')
                    .makeRow('', 'Ping', 'Test response', 'ping')
                    .makeRow('', 'Repo', 'GitHub link', 'repo')
                    .makeRow('', 'Owner', 'Contact card', 'owner');
                await listBtn.send(jid);
            });

            // 3. Rich AI response (ORich)
            await runTest('🤖 Rich AI response', async () => {
                const rich = new ORich(sock)
                    .addText('Live Stats')
                    .addTable([
                        ['Metric', 'Value'],
                        ['Users', '1200'],
                        ['Uptime', '99.9%']
                    ])
                    .addCode('javascript', 'console.log("Hello from Hamatrix");')
                    .addSuggest(['Show menu', 'Help']);
                await rich.send(jid);
            });

            // 4. Carousel
            await runTest('🎠 Carousel', async () => {
                const carousel = new Carousel(sock)
                    .setBody('Featured Products')
                    .setFooter('Swipe left');

                const makeCard = async (imageUrl, title, text, buttonText, buttonId) => {
                    const b = new Button(sock)
                        .setTitle(title)
                        .setBody(text)
                        .setImage(imageUrl)
                        .addReply(buttonText, buttonId);
                    return await b.toCard();
                };

                const card1 = await makeCard('https://picsum.photos/400/300?random=10', 'Product A', 'First product', 'View', 'prod_a');
                const card2 = await makeCard('https://picsum.photos/400/300?random=11', 'Product B', 'Second product', 'View', 'prod_b');
                carousel.addCard([card1, card2]);
                await carousel.send(jid);
            });

            // 5. Poll
            await runTest('📊 Poll', async () => {
                await sock.sendMessage(jid, {
                    poll: {
                        name: 'What is your favorite feature?',
                        values: ['Carousel', 'Lists', 'Buttons', 'Rich AI'],
                        selectableCount: 1
                    }
                });
            });

            // 6. Album (multiple images)
            await runTest('🖼️ Album (multiple images)', async () => {
                await sock.sendMessage(jid, {
                    albumMessage: [
                        { image: { url: 'https://picsum.photos/400/300?random=20' }, caption: 'Image 1' },
                        { image: { url: 'https://picsum.photos/400/300?random=21' }, caption: 'Image 2' }
                    ]
                });
            });

            // 7. Socket helper: sendTable (if available)
            await runTest('📋 Table (socket helper)', async () => {
                if (typeof sock.sendTable !== 'function') {
                    throw new Error('sendTable not available');
                }
                await sock.sendTable(
                    jid,
                    'Bot Info',
                    ['Name', 'Version', 'Status'],
                    [
                        ['Hamatrix', '1.0.0', 'Online'],
                        ['Users', '1200', 'Active']
                    ],
                    null,
                    { headerText: 'Live Stats', footer: 'Powered by Hamatrix' }
                );
            });

            // Code block intentionally skipped because sendCodeBlock has a bug.
            // We'll fix it separately.

            await sock.sendMessage(jid, { text: '✅ ourin tests finished (some may have failed, see logs).' });
        } catch (e) {
            console.error('❌ ourin command error:', e);
            await sock.sendMessage(jid, { text: '❌ ourin error: ' + e.stack });
        }
    }
};
