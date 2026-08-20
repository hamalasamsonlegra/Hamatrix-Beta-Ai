const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { sendInteractiveMessage } = require('../lib/btns');

const execFileAsync = promisify(execFile);

function uptime() {
    const s = Math.floor(process.uptime());
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
}

const BOT_INFO = {
    name: 'HAMATRIX BETA AI',
    creator: 'Son',
    version: 'Beta 3.0',
    prefix: '.',
    mode: 'public',
    commands: '500+',
    engine: 'Quantum Core'
};

const BRANDING_FILE = path.join(__dirname, '..', 'branding.jpg');
const TEMP_DIR = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

const VIDEO_PATH = path.join(TEMP_DIR, 'menu3_video.mp4');

async function generateVideo() {
    if (fs.existsSync(VIDEO_PATH)) {
        return fs.readFileSync(VIDEO_PATH);
    }
    if (!fs.existsSync(BRANDING_FILE)) return null;
    try {
        await execFileAsync('ffmpeg', [
            '-y',
            '-loop', '1',
            '-i', BRANDING_FILE,
            '-t', '5',
            '-vf',
            'scale=1280:720:force_original_aspect_ratio=decrease,' +
            'pad=1280:720:(ow-iw)/2:(oh-ih)/2,format=yuv420p',
            '-r', '30',
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-movflags', '+faststart',
            VIDEO_PATH
        ]);
        return fs.readFileSync(VIDEO_PATH);
    } catch (e) {
        console.error('Video generation failed:', e.message);
        return null;
    }
}

function extractSelectedId(message) {
    try {
        if (message.listResponseMessage?.singleSelectReply?.selectedRowId)
            return message.listResponseMessage.singleSelectReply.selectedRowId;
        if (message.buttonsResponseMessage?.selectedButtonId)
            return message.buttonsResponseMessage.selectedButtonId;
        if (message.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson) {
            const params = JSON.parse(message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson);
            return params.id || null;
        }
    } catch {}
    return null;
}

module.exports = {
    name: 'menu3',
    description: 'Video with buttons attached (multiple attempts)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        global.skipForward = true;
        global.skipTyping = true;

        const videoBuffer = await generateVideo();
        const caption = `🔮 *${BOT_INFO.name}*\n` +
                        `👑 *Creator:* ${BOT_INFO.creator}\n` +
                        `📦 *Commands:* ${BOT_INFO.commands}\n` +
                        `⏱️ *Uptime:* ${uptime()}\n` +
                        `⚙️ *Mode:* ${BOT_INFO.mode}\n` +
                        `🏷️ *Version:* ${BOT_INFO.version}\n` +
                        `🧠 *Engine:* ${BOT_INFO.engine}\n\n` +
                        `_Use the buttons below:_`;

        const buttons = [
            {
                name: 'quick_reply',
                buttonParamsJson: JSON.stringify({ display_text: '🏓 Ping', id: `m3_ping_${ts}` })
            },
            {
                name: 'quick_reply',
                buttonParamsJson: JSON.stringify({ display_text: '📂 Repo', id: `m3_repo_${ts}` })
            },
            {
                name: 'cta_url',
                buttonParamsJson: JSON.stringify({ display_text: '🌐 Visit Creator', url: 'https://wa.me/256795312914' })
            },
            {
                name: 'cta_call',
                buttonParamsJson: JSON.stringify({ display_text: '📞 Call Owner', phone_number: '+256795312914' })
            },
            {
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({ display_text: '📋 Copy Text', copy_code: 'Hamatrix Beta AI - Premium WhatsApp Bot' })
            }
        ];

        let sent = false;

        // Attempt 1: gifted-btns with video header property
        if (!sent && videoBuffer) {
            try {
                await sendInteractiveMessage(sock, jid, {
                    video: { buffer: videoBuffer, mimetype: 'video/mp4' },
                    text: caption,
                    footer: `© ${BOT_INFO.name}`,
                    interactiveButtons: buttons
                });
                sent = true;
                console.log('menu3: Attempt 1 (gifted-btns video header) succeeded');
            } catch (e) {
                console.log('menu3: Attempt 1 failed:', e.message);
            }
        }

        // Attempt 2: raw Baileys interactive with header.video
        if (!sent && videoBuffer) {
            try {
                await sock.sendMessage(jid, {
                    interactive: {
                        type: 'button',
                        header: {
                            video: videoBuffer,
                            mimetype: 'video/mp4'
                        },
                        body: { text: caption },
                        footer: { text: `© ${BOT_INFO.name}` },
                        nativeFlowMessage: { buttons: buttons }
                    }
                }, { quoted: msg });
                sent = true;
                console.log('menu3: Attempt 2 (raw header.video) succeeded');
            } catch (e) {
                console.log('menu3: Attempt 2 failed:', e.message);
            }
        }

        // Attempt 3: raw Baileys with header.videoMessage
        if (!sent && videoBuffer) {
            try {
                await sock.sendMessage(jid, {
                    interactive: {
                        type: 'button',
                        header: {
                            videoMessage: {
                                video: videoBuffer,
                                mimetype: 'video/mp4'
                            }
                        },
                        body: { text: caption },
                        footer: { text: `© ${BOT_INFO.name}` },
                        nativeFlowMessage: { buttons: buttons }
                    }
                }, { quoted: msg });
                sent = true;
                console.log('menu3: Attempt 3 (raw header.videoMessage) succeeded');
            } catch (e) {
                console.log('menu3: Attempt 3 failed:', e.message);
            }
        }

        // Fallback: send video separately, then interactive message
        if (!sent) {
            console.log('menu3: All combined attempts failed. Using fallback (video + separate buttons)');
            try {
                if (videoBuffer) {
                    await sock.sendMessage(jid, { video: videoBuffer, mimetype: 'video/mp4', caption: '🎬 *Hamatrix Beta AI*' }, { quoted: msg });
                }
                await sendInteractiveMessage(sock, jid, {
                    text: caption,
                    footer: `© ${BOT_INFO.name}`,
                    interactiveButtons: buttons
                });
            } catch (e) {
                console.error('menu3 fallback also failed:', e.message);
            }
        }

        global.skipForward = false;
        global.skipTyping = false;

        // Listener for responses
        const handleResponse = async (event) => {
            const messages = event.messages || [];
            for (const m of messages) {
                if (m.key.remoteJid !== jid) continue;
                const selectedId = extractSelectedId(m.message);
                if (!selectedId || !selectedId.endsWith('_' + ts)) continue;

                const cleanId = selectedId.replace(/_\d+$/, '');
                if (cleanId === 'm3_ping') {
                    await sock.sendMessage(jid, { text: '🏓 Pong!' }, { quoted: m });
                } else if (cleanId === 'm3_repo') {
                    await sock.sendMessage(jid, { text: '📂 https://github.com/hamalasamsonlegra/Hamatrix-Beta-Ai' }, { quoted: m });
                } else {
                    await sock.sendMessage(jid, { text: `✨ You selected: ${cleanId}` }, { quoted: m });
                }
                break;
            }
        };

        sock.ev.on('messages.upsert', handleResponse);
        setTimeout(() => sock.ev.off('messages.upsert', handleResponse), 5 * 60 * 1000);
    }
};
