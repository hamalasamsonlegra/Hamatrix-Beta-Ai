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
const VIDEO_PATH = path.join(TEMP_DIR, 'test_ptv.mp4');
const THUMB_PATH = path.join(TEMP_DIR, 'test_thumb.jpg');

async function generateVideoAndThumb() {
  if (!fs.existsSync(BRANDING_PATH)) throw new Error('branding.jpg not found');

  // Generate 3s 720x720 video
  await execFileAsync('ffmpeg', [
    '-y', '-loop', '1', '-i', BRANDING_PATH,
    '-t', '3',
    '-vf', "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2",
    '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    VIDEO_PATH
  ]);

  const videoBuffer = fs.readFileSync(VIDEO_PATH);

  // Generate thumbnail (320x320 JPEG)
  let thumbBuffer = null;
  if (sharp) {
    thumbBuffer = await sharp(brandingBuffer).resize(320, 320).jpeg().toBuffer();
    fs.writeFileSync(THUMB_PATH, thumbBuffer);
  } else {
    // fallback: use branding.jpg as thumbnail
    thumbBuffer = fs.readFileSync(BRANDING_PATH);
  }

  return { videoBuffer, thumbBuffer };
}

module.exports = {
    name: 'testptv2',
    description: 'Test PTV with required duration and thumbnail',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        try {
            const { videoBuffer, thumbBuffer } = await generateVideoAndThumb();
            console.log(`[TESTPTV2] video: ${videoBuffer.length} bytes, thumb: ${thumbBuffer.length} bytes`);

            // Correct PTV send
            await sock.sendMessage(jid, {
                video: videoBuffer,
                mimetype: 'video/mp4',
                ptv: true,
                gifPlayback: false,
                duration: 3,
                jpegThumbnail: thumbBuffer
            }, { quoted: msg });

            console.log('[TESTPTV2] PTV sent successfully');
            await sock.sendMessage(jid, { text: '✅ PTV sent with duration and thumbnail.' });
        } catch (e) {
            console.error('[TESTPTV2] Error:', e);
            await sock.sendMessage(jid, { text: '❌ PTV error: ' + e.message });
        }
    }
};
