const fs = require('fs');
const path = require('path');
const gTTS = require('gtts');
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
    version: 'Beta 1.0',
    prefix: '.',
    mode: 'public',
    commands: '500+',
    engine: 'Quantum Core'
};

const BRANDING_FILE = path.join(__dirname, '..', 'branding.jpg');
const TEMP_DIR = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

const VIDEO_NOTE_PATH = path.join(TEMP_DIR, 'video_note.mp4');
async function generateVideoNote() {
    if (fs.existsSync(VIDEO_NOTE_PATH)) {
        return fs.readFileSync(VIDEO_NOTE_PATH);
    }
    if (!fs.existsSync(BRANDING_FILE)) return null;
    try {
        await execFileAsync('ffmpeg', [
            '-y',
            '-loop', '1',
            '-i', BRANDING_FILE,
            '-t', '3',
            '-vf',
            'scale=640:640:force_original_aspect_ratio=decrease,' +
            'pad=640:640:(ow-iw)/2:(oh-ih)/2',
            '-r', '30',
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-movflags', '+faststart',
            VIDEO_NOTE_PATH
        ]);
        return fs.readFileSync(VIDEO_NOTE_PATH);
    } catch (e) {
        console.error('Video generation failed:', e.message);
        return null;
    }
}

const CATEGORIES = [
    { id: 'main',     name: 'ᴍᴀɪɴ',        cmds: ['alive','ping','menu','repo','owner','info','uptime','runtime','ownerinfo'] },
    { id: 'fun',      name: 'ғᴜɴ',          cmds: ['hug','kiss','slap','cuddle','pat','bonk','yeet','blush','smile','wave','wink','dance','cry','happy','angry','laugh','bite','poke','kill','shoot','highfive','handhold','nom','glomp','cringe','smug','lick','awoo','bully','sleep','confused','tickle','roll','fluff','joke','quote','fact','advice','8ball','ship','marry','breakup','roast','hack','pickup','compliment'] },
    { id: 'anime',    name: 'ᴀɴɪᴍᴇ',       cmds: ['waifu','neko','kitsune','husbando','animegirl','animeboy','maid','uniform','schoolgirl','elf','princess','prince','chibi','idol','gamer','cyberpunk','aesthetic'] },
    { id: 'group',    name: 'ɢʀᴏᴜᴘ',       cmds: ['kick','add','promote','demote','tagall','hidetag','mute','unmute','welcome','goodbye','poll','revoke','link','ginfo','setgcname','setgcdesc','announce','open','acceptall','rejectall','requests','find'] },
    { id: 'download', name: 'ᴅᴏᴡɴʟᴏᴀᴅ',    cmds: ['ytmp3','ytmp4','tiktok','ig','fb','mediafire','play','song','lyrics','pinterest','apk'] },
    { id: 'tools',    name: 'ᴛᴏᴏʟs',       cmds: ['calc','translate','qr','weather','ss','npm'] },
    { id: 'owner',    name: 'ᴏᴡɴᴇʀ',       cmds: ['block','unblock','blocklist','leave','pair','maintenance','broadcast','setprefix','setppbot','restart','shutdown','autoread','autoviewstatus','antilink','antidelete','antiedit','warn','ban','unban'] },
    { id: 'media',    name: 'ᴍᴇᴅɪᴀ',       cmds: ['sticker','toimg','tovideo','toaudio','tovoice','take','steal','vv','vv2','vv3','stickerinfo','txtsticker','tgsticker','album'] },
];

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
    name: 'menu',
    description: 'Premium menu: circular video note + interactive menu + voice greeting',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const ts = Date.now().toString();

        // ─── 1. Send circular video note (PTV) ─────────
        try {
            const videoBuffer = await generateVideoNote();
            if (videoBuffer) {
                global.skipForward = true;
                global.skipTyping = true;
                await sock.sendMessage(jid, {
                    video: videoBuffer,
                    mimetype: 'video/mp4',
                    ptv: true,
                    caption: ''
                }, { quoted: msg });
                global.skipForward = false;
                global.skipTyping = false;
            }
        } catch (e) {
            console.error('Video note failed:', e.message);
        }

        // ─── 2. Send interactive menu (no image) ─────────
        const caption = `🌐 *WHATSAPP BOT MULTI DEVICE*

_*Selamat Malam* 🌙 *SON,* My name is *Hamatrix Beta.*_

🛩️ _I Can help you with several things within WhatsApp. And I am Armed a Javascript Program Assembled by my creator._

\`INFORMATION BOT\`
> 🍵 *Creator:* Hamatrix Team
> 🍔 *Name:* Hamatrix Beta
> 🍉 *Version:* Beta 1.0
> 🍌 *Type:* Plugin × Cases
> 🦴 *Mode:* 🍕 Unlock for everyone

*Use responsibly* | *Dev Son*

> _Please select the button in below_`;

        try {
            global.skipForward = true;
            global.skipTyping = true;
            await sendInteractiveMessage(sock, jid, {
                text: caption,
                footer: `© ${BOT_INFO.name}`,
                interactiveButtons: [
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: '👤 Visit Creator',
                            url: 'https://wa.me/256795312914'
                        })
                    },
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '📂 Select Category',
                            sections: [{
                                title: 'Categories',
                                rows: CATEGORIES.map(cat => ({
                                    id: `cat_${cat.id}_${ts}`,
                                    title: cat.name.toUpperCase(),
                                    description: `${cat.cmds.length} commands`
                                }))
                            }]
                        })
                    }
                ]
            });
            global.skipForward = false;
            global.skipTyping = false;
        } catch (e) {
            console.error('Menu interactive failed:', e.message);
        }

        // ─── 3. Send voice greeting ──────────────────────
        try {
            const senderName = msg.pushName || 'friend';
            const greetingText = `Hello ${senderName}, welcome to Hamatrix Beta. I am here to assist you.`;
            const tts = new gTTS(greetingText, 'en');

            const mp3Buffer = await new Promise((resolve, reject) => {
                const chunks = [];
                tts.stream()
                    .on('data', chunk => chunks.push(chunk))
                    .on('end', () => resolve(Buffer.concat(chunks)))
                    .on('error', reject);
            });

            const mp3Path = path.join(TEMP_DIR, 'greeting.mp3');
            const oggPath = path.join(TEMP_DIR, 'greeting.ogg');
            fs.writeFileSync(mp3Path, mp3Buffer);
            await execFileAsync('ffmpeg', ['-y', '-i', mp3Path, '-c:a', 'libopus', '-b:a', '64k', '-ar', '48000', '-ac', '1', oggPath]);
            const oggBuffer = fs.readFileSync(oggPath);

            global.skipForward = true;
            global.skipTyping = true;
            await sock.sendMessage(jid, {
                audio: oggBuffer,
                mimetype: 'audio/ogg; codecs=opus',
                ptt: true,
                fileName: 'greeting.ogg'
            }, { quoted: msg });
            global.skipForward = false;
            global.skipTyping = false;

            fs.unlinkSync(mp3Path);
            fs.unlinkSync(oggPath);
        } catch (e) {
            console.error('Voice greeting failed:', e.message);
        }

        // ─── Listener for category selection ───────────────
        const handleTap = async (event) => {
            const messages = event.messages || [];
            for (const m of messages) {
                if (m.key.remoteJid !== jid) continue;
                const selId = extractSelectedId(m.message);
                if (!selId || !selId.endsWith('_' + ts)) continue;

                const catMatch = selId.match(/^cat_(.+)_\d+$/);
                if (!catMatch) continue;
                const cat = CATEGORIES.find(c => c.id === catMatch[1]);
                if (!cat) continue;

                const cmdRows = cat.cmds.map(cmd => ({
                    id: `cmd_${cmd}_${ts}`,
                    title: `${BOT_INFO.prefix}${cmd}`,
                    description: `Execute ${cmd}`
                }));

                await sendInteractiveMessage(sock, jid, {
                    text: `📂 *${cat.name.toUpperCase()}*\n${cat.cmds.length} commands`,
                    footer: `© ${BOT_INFO.name}`,
                    interactiveButtons: [
                        {
                            name: 'single_select',
                            buttonParamsJson: JSON.stringify({
                                title: `Commands in ${cat.name.toUpperCase()}`,
                                sections: [{ title: cat.name.toUpperCase(), rows: cmdRows }]
                            })
                        }
                    ]
                });

                break;
            }
        };

        sock.ev.on('messages.upsert', handleTap);
        setTimeout(() => sock.ev.off('messages.upsert', handleTap), 5 * 60 * 1000);
    }
};
