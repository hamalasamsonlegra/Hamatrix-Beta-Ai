const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(process.env.HOME || '/data/data/com.termux/files/home', '.cache', 'baileys-version.json');
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
const FALLBACK_VERSION = [2, 3000, 1043857760];

function readCache() {
  try {
    const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    if (data && data.version && data.timestamp) return data;
  } catch (e) {}
  return null;
}

function writeCache(version) {
  try {
    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify({ version, timestamp: Date.now() }));
  } catch (e) {}
}

async function getBaileysVersion() {
  const cached = readCache();
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log('⚡ Using cached Baileys version:', cached.version);
    return cached.version;
  }

  try {
    const { fetchLatestBaileysVersion } = await import('ourin-baileys');
    const result = await Promise.race([
      fetchLatestBaileysVersion(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('fetch version timeout')), 5000))
    ]);
    writeCache(result.version);
    console.log('🌐 Fetched new Baileys version:', result.version);
    return result.version;
  } catch (err) {
    console.warn('⚠️ Could not fetch Baileys version, using cache/fallback:', err.message);
    if (cached) return cached.version;
    return FALLBACK_VERSION;
  }
}

module.exports = { getBaileysVersion };
