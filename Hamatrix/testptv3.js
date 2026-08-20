const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const execFileAsync = promisify(execFile);

let sharp = null;
try { sharp = require('sharp'); } catch {}

const BRANDING_PATH = path.join(__dirname, '..', 'branding.jpg');
const TEMP_DIR = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });
const VIDEO_PATH = path.join(TEMP_DIR, 'test_ptv3.mp4');

async function generateVideoAndThumb() {
  if (!fs.existsSync(BRANDING_PATH)) throw new Error('branding.jpg not found');

  await execFileAsync('ffmpeg', [
    '-y', '-loop', '1', '-i', BRANDING_PATH,
    '-t', '3',
    '-vf', "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2",
    '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    VIDEO_PATH
  ]);

  const videoBuffer = fs.readFileSync(VIDEO_PATH);

  let thumbBuffer = null;
  if (sharp) {
    thumbBuffer = await sharp(fs.readFileSync(BRANDING_PATH)).resize(320, 320).jpeg().toBuffer();
  } else {
    thumbBuffer = fs.readFileSync(BRANDING_PATH);
  }

  return { videoBuffer, thumbBuffer };
}

module.exports = {
    name: 'testptv3',
    description: 'Test PTV using prepareWAMessageMedia + relayMessage (bypass bug)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        try {
            const { videoBuffer, thumbBuffer } = await generateVideoAndThumb();
            console.log(`[TESTPTV3] video: ${videoBuffer.length} bytes, thumb: ${thumbBuffer.length} bytes`);

            // Dynamic import ourin-baileys
            const ourin = await import('ourin-baileys');
            const { prepareWAMessageMedia, generateMessageID } = ourin;

            // Prepare media (upload video)
            const media = await prepareWAMessageMedia(
                { video: videoBuffer, jpegThumbnail: thumbBuffer, duration: 3, gifPlayback: false },
                { upload: sock.waUploadToServer, logger: sock.logger }
            );
            console.log('[TESTPTV3] prepareWAMessageMedia returned videoMessage:', !!media.videoMessage);

            // Build message object manually
            const message = {
                ptvMessage: media.videoMessage
            };

            // Generate message ID
            const messageId = generateMessageID ? generateMessageID() : '3EB0' + Date.now().toString();

            // Send via relayMessage (skips generateWAMessageFromContent bug)
            await sock.relayMessage(jid, message, { messageId });

            console.log('[TESTPTV3] PTV sent via relayMessage');
            await sock.sendMessage(jid, { text: '✅ PTV sent via relayMessage.' });
        } catch (e) {
            console.error('[TESTPTV3] Error:', e);
            await sock.sendMessage(jid, { text: '❌ PTV error: ' + e.message });
        }
    }
};
