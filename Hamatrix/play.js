const fetch = require('node-fetch');
module.exports = {
  name: 'play',
  description: 'Play a song (YouTube search + MP3)',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const query = args.join(' ');
    if (!query) return sock.sendMessage(jid, { text: '❌ Please provide a song name.' }, { quoted: msg });
    try {
      // Search
      const searchRes = await fetch('https://api.akuari.my.id/search/youtube?query=' + encodeURIComponent(query));
      const searchData = await searchRes.json();
      if (!searchData.status || !searchData.result || !searchData.result[0]) {
        return sock.sendMessage(jid, { text: '❌ No results found.' });
      }
      const firstVideo = searchData.result[0];
      const videoUrl = 'https://www.youtube.com/watch?v=' + firstVideo.videoId;
      // Download MP3
      const dlRes = await fetch('https://api.akuari.my.id/download/ytmp3?link=' + encodeURIComponent(videoUrl));
      const dlData = await dlRes.json();
      if (dlData.status && dlData.result && dlData.result.download_url) {
        await sock.sendMessage(jid, {
          audio: { url: dlData.result.download_url },
          mimetype: 'audio/mpeg',
          fileName: dlData.result.title + '.mp3'
        }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: '❌ Download failed. Try again.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: '❌ Service unavailable.' });
    }
  }
};