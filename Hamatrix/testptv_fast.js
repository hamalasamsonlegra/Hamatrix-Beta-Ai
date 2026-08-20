const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const MENU_VIDEOS_DIR = path.join(ROOT_DIR, 'MENU_VIDEOS');
const DEFAULT_VIDEO_PATH = path.join(ROOT_DIR, 'customnote.mp4');

function findVideo() {
  const candidates = [
    DEFAULT_VIDEO_PATH,
    path.join(MENU_VIDEOS_DIR, 'menu_ptv.mp4'),
    path.join(ROOT_DIR, 'menu_ptv.mp4')
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      console.log(`[PTV_FAST] Found video: ${p}`);
      return fs.readFileSync(p);
    }
  }
  return null;
}

module.exports = {
    name: 'testptv_fast',
    description: 'Fast PTV test using existing video file (no generation)',
    async execute(sock, msg, args) {
        const jid = msg.key.remoteJid;
        const videoBuffer = findVideo();

        if (!videoBuffer) {
            await sock.sendMessage(jid, { text: '❌ No video file found. Put customnote.mp4 in bot root or MENU_VIDEOS/menu_ptv.mp4' });
            return;
        }

        console.log(`[PTV_FAST] Sending ${videoBuffer.length} bytes as PTV...`);
        try {
            // No quoted, no jpegThumbnail, but with duration and gifPlayback:false
            await sock.sendMessage(jid, {
                video: videoBuffer,
                mimetype: 'video/mp4',
                ptv: true,
                gifPlayback: false,
                duration: 3   // adjust to actual video length in seconds
            });
            console.log('[PTV_FAST] ✅ PTV sent successfully');
        } catch (e) {
            console.error('[PTV_FAST] ❌ Error:', e);
            await sock.sendMessage(jid, { text: '❌ PTV error: ' + e.message });
        }
    }
};
