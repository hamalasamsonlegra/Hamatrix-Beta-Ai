module.exports = {
    name: 'interact2',
    description: 'Test advanced interactive messages (bottom sheet, carousel, multi-select)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        global.skipForward = true;
        global.skipTyping = true;

        const sendRaw = async (label, payload) => {
            try {
                await sock.sendMessage(jid, { text: `🔍 Testing: ${label}` });
                await sock.sendMessage(jid, payload);
            } catch (e) {
                await sock.sendMessage(jid, { text: `❌ ${label} failed: ${e.message}` });
            }
        };

        try {
            // 1. True Bottom Sheet
            await sendRaw('Bottom Sheet', {
                interactive: {
                    type: 'bottom_sheet',
                    body: { text: 'Select an option' },
                    nativeFlowMessage: {
                        message: {
                            title: 'Bottom Sheet',
                            sections: [
                                {
                                    title: 'Section',
                                    rows: [
                                        { id: `bs_${ts}`, title: 'Option 1', description: 'Desc 1' }
                                    ]
                                }
                            ]
                        }
                    }
                }
            });

            // 2. Carousel
            await sendRaw('Carousel', {
                interactive: {
                    type: 'carousel',
                    carouselMessage: {
                        cards: [
                            {
                                header: { text: 'Card 1' },
                                body: { text: 'First card' },
                                nativeFlowMessage: {
                                    buttons: [
                                        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Click', id: 'car1' }) }
                                    ]
                                }
                            },
                            {
                                header: { text: 'Card 2' },
                                body: { text: 'Second card' },
                                nativeFlowMessage: {
                                    buttons: [
                                        { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Click', id: 'car2' }) }
                                    ]
                                }
                            }
                        ]
                    }
                }
            });

            // 3. Multi-Select
            await sendRaw('Multi-Select', {
                interactive: {
                    type: 'multi_select',
                    body: { text: 'Choose multiple' },
                    nativeFlowMessage: {
                        message: {
                            title: 'Multi Select',
                            sections: [
                                {
                                    title: 'Options',
                                    rows: [
                                        { id: `ms1_${ts}`, title: 'Option A', description: 'A' },
                                        { id: `ms2_${ts}`, title: 'Option B', description: 'B' }
                                    ]
                                }
                            ]
                        }
                    }
                }
            });

            // 4. CTA Reminder
            await sendRaw('CTA Reminder', {
                interactive: {
                    type: 'button',
                    body: { text: 'Set reminder' },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'cta_reminder',
                                buttonParamsJson: JSON.stringify({
                                    display_text: 'Remind me',
                                    reminder_type: 'once',
                                    timestamp: Math.floor(Date.now()/1000) + 3600
                                })
                            }
                        ]
                    }
                }
            });

            // 5. CTA Date
            await sendRaw('CTA Date', {
                interactive: {
                    type: 'button',
                    body: { text: 'Pick date' },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'cta_date',
                                buttonParamsJson: JSON.stringify({
                                    display_text: 'Date',
                                    date_time: {
                                        min: Math.floor(Date.now()/1000),
                                        max: Math.floor(Date.now()/1000) + 86400
                                    }
                                })
                            }
                        ]
                    }
                }
            });

            // 6. CTA Address
            await sendRaw('CTA Address', {
                interactive: {
                    type: 'button',
                    body: { text: 'Share address' },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'cta_address',
                                buttonParamsJson: JSON.stringify({
                                    display_text: 'Address',
                                    address: {
                                        country: 'UG',
                                        city: 'Kampala',
                                        address: 'Main Street 1'
                                    }
                                })
                            }
                        ]
                    }
                }
            });

        } catch (e) {
            console.error('interact2 overall error:', e.message);
        } finally {
            global.skipForward = false;
            global.skipTyping = false;
        }
    }
};
