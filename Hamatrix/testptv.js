const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const execFileAsync = promisify(execFile);

const BRANDING_PATH = path.join(__dirname, '..', 'branding.jpg');
const TEMP_DIR = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });
const VIDEO_PATH = path.join(TEMP_DIR, 'test_ptv.mp4');

async function generateVideoFromImage() {
  if (!fs.existsSync(BRANDING_PATH)) {
    throw new Error('branding.jpg not found');
  }
  // Generate a 3-second 720x720 video with fading effect
  await execFileAsync('ffmpeg', [
    '-y',
    '-loop', '1',
    '-i', BRANDING_PATH,
    '-t', '3',
    '-vf', "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2",
    '-r', '30',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    VIDEO_PATH
  ]);
  return fs.readFileSync(VIDEO_PATH);
}

module.exports = {
    name: 'testptv',
    description: 'Test PTV (video note) using generated video from branding.jpg',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        try {
            const buffer = await generateVideoFromImage();
            console.log(`[TESTPTV] Generated video size: ${buffer.length} bytes`);

            // Method 1: ptv flag
            try {
                console.log('[TESTPTV] Trying ptv:true ...');
                await sock.sendMessage(jid, {
                    video: buffer,
                    mimetype: 'video/mp4',
                    ptv: true,
                    caption: ''
                }, { quoted: msg });
                console.log('[TESTPTV] Method 1 sent successfully.');
                await sock.sendMessage(jid, { text: '✅ Method 1 (ptv:true) sent.' });
                return;
            } catch (e) {
                console.error('[TESTPTV] Method 1 failed:', e.message);
            }

            // Method 2: videoNote flag
            try {
                console.log('[TESTPTV] Trying videoNote:true ...');
                await sock.sendMessage(jid, {
                    video: buffer,
                    mimetype: 'video/mp4',
                    videoNote: true,
                    caption: ''
                }, { quoted: msg });
                console.log('[TESTPTV] Method 2 sent successfully.');
                await sock.sendMessage(jid, { text: '✅ Method 2 (videoNote) sent.' });
                return;
            } catch (e) {
                console.error('[TESTPTV] Method 2 failed:', e.message);
            }

            // Method 3: ptv with duration/gifPlayback
            try {
                console.log('[TESTPTV] Trying ptv:true with duration and gifPlayback:false ...');
                await sock.sendMessage(jid, {
                    video: buffer,
                    mimetype: 'video/mp4',
                    ptv: true,
                    gifPlayback: false,
                    duration: 3
                }, { quoted: msg });
                console.log('[TESTPTV] Method 3 sent successfully.');
                await sock.sendMessage(jid, { text: '✅ Method 3 sent.' });
                return;
            } catch (e) {
                console.error('[TESTPTV] Method 3 failed:', e.message);
            }

            await sock.sendMessage(jid, { text: '❌ All PTV methods failed. Check terminal logs.' });
        } catch (e) {
            console.error('[TESTPTV] Error generating video:', e);
            await sock.sendMessage(jid, { text: '❌ Error: ' + e.message });
        }
    }
};
