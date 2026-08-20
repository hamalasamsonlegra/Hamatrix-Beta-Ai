const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const execFileAsync = promisify(execFile);

const BRANDING_PATH = path.join(__dirname, '..', 'branding.jpg');
const TEMP_DIR = path.join(__dirname, '..', 'temp');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });
const VIDEO_PATH = path.join(TEMP_DIR, 'test_ptv4.mp4');

async function generateVideo() {
  await execFileAsync('ffmpeg', [
    '-y', '-loop', '1', '-i', BRANDING_PATH,
    '-t', '3',
    '-vf', "scale=720:720:force_original_aspect_ratio=decrease,pad=720:720:(ow-iw)/2:(oh-ih)/2",
    '-r', '30', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    VIDEO_PATH
  ]);
  return fs.readFileSync(VIDEO_PATH);
}

module.exports = {
    name: 'testptv4',
    description: 'Test PTV without quoted (avoids contextInfo bug)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;

        try {
            const videoBuffer = await generateVideo();
            console.log(`[TESTPTV4] video size: ${videoBuffer.length} bytes`);

            // Try send without quoted
            await sock.sendMessage(jid, {
                video: videoBuffer,
                mimetype: 'video/mp4',
                ptv: true,
                gifPlayback: false,
                duration: 3
                // no jpegThumbnail for now
            });

            console.log('[TESTPTV4] PTV sendMessage succeeded');
            await sock.sendMessage(jid, { text: '✅ PTV sent (no quoted). Check if it appears.' });
        } catch (e) {
            console.error('[TESTPTV4] Error:', e);
            await sock.sendMessage(jid, { text: '❌ PTV error: ' + e.message });
        }
    }
};
