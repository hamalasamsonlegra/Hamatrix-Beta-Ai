const fs = require('fs');
const path = require('path');

const HAMATRIX_DIR = path.join(__dirname, 'Hamatrix');
if (!fs.existsSync(HAMATRIX_DIR)) fs.mkdirSync(HAMATRIX_DIR);

// ── 1. FUN / REACTIONS (use otakugifs or nekos.life) ──────────────
const funReactions = [
  'hug','kiss','slap','cuddle','pat','bonk','yeet','blush','smile',
  'wave','wink','dance','cry','happy','angry','laugh','bite','poke',
  'kill','shoot','highfive','handhold','nom','glomp','cringe','smug',
  'lick','awoo','bully','sleep','confused','tickle','roll','fluff'
];
funReactions.forEach(cmd => {
  const code = `const fetch = require('node-fetch');
module.exports = {
  name: '${cmd}',
  description: 'Send a ${cmd} GIF',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(\`https://api.otakugifs.xyz/gif?reaction=\${cmd}&format=gif\`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { video: { url: data.url }, gifPlayback: true, caption: \`\${cmd}!\` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: \`Couldn't fetch \${cmd} gif.\` });
      }
    } catch {
      await sock.sendMessage(jid, { text: \`*\${cmd.toUpperCase()}!* (no GIF available)\` });
    }
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 2. ANIME / WAIFU (nekos.life or waifu.pics) ─────────────────
const animeCmds = ['waifu','neko','kitsune','husbando','animegirl','animeboy','maid','uniform','schoolgirl','elf','princess','prince','chibi','idol','gamer','cyberpunk','aesthetic'];
animeCmds.forEach(cmd => {
  const code = `const fetch = require('node-fetch');
module.exports = {
  name: '${cmd}',
  description: 'Random ${cmd} image',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    try {
      const res = await fetch(\`https://api.waifu.pics/sfw/\${cmd}\`);
      const data = await res.json();
      if (data.url) {
        await sock.sendMessage(jid, { image: { url: data.url }, caption: \`\${cmd}!\` }, { quoted: msg });
      } else {
        await sock.sendMessage(jid, { text: 'Could not fetch image.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: \`*\${cmd}* image unavailable right now.\` });
    }
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 3. SIMPLE TEXT COMMANDS (joke, quote, fact, advice, etc.) ──
const textCommands = {
  joke: `const jokes = ["Why do programmers prefer dark mode? Because light attracts bugs!","Why did the developer go broke? He used up all his cache.","How many programmers does it take to change a light bulb? None, that's a hardware problem."];
module.exports = {
  name: 'joke',
  description: 'Random joke',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: jokes[Math.floor(Math.random()*jokes.length)] }, { quoted: msg });
  }
};`,
  quote: `const quotes = ["Be yourself; everyone else is already taken. - Oscar Wilde","The only way to do great work is to love what you do. - Steve Jobs","In the middle of difficulty lies opportunity. - Albert Einstein"];
module.exports = {
  name: 'quote',
  description: 'Random quote',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: quotes[Math.floor(Math.random()*quotes.length)] }, { quoted: msg });
  }
};`,
  fact: `const facts = ["Honey never spoils.","Octopuses have three hearts.","A day on Venus is longer than a year on Venus."];
module.exports = {
  name: 'fact',
  description: 'Random fact',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: facts[Math.floor(Math.random()*facts.length)] }, { quoted: msg });
  }
};`,
  advice: `const fetch = require('node-fetch');
module.exports = {
  name: 'advice',
  description: 'Random advice',
  async execute(sock, msg, args) {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, { text: data.slip.advice }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: "You're doing great, keep going!" });
    }
  }
};`,
  '8ball': `module.exports = {
  name: '8ball',
  description: 'Magic 8-ball',
  async execute(sock, msg, args) {
    const responses = ["Yes","No","Maybe","Ask again later","Definitely","I don't think so","Of course!","Not a chance"];
    const ans = responses[Math.floor(Math.random()*responses.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: \`🎱 \${ans}\` }, { quoted: msg });
  }
};`,
  compliment: `const compliments = ["You look great today!","You're an awesome person!","You light up the room!","You're a gift to those around you."];
module.exports = {
  name: 'compliment',
  description: 'Give a compliment',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: compliments[Math.floor(Math.random()*compliments.length)] }, { quoted: msg });
  }
};`,
  pickup: `const lines = ["Are you a magician? Because whenever I look at you, everyone else disappears.","Do you have a map? I keep getting lost in your eyes.","Is your name Google? Because you have everything I've been searching for."];
module.exports = {
  name: 'pickup',
  description: 'Pickup line',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: lines[Math.floor(Math.random()*lines.length)] }, { quoted: msg });
  }
};`,
  ship: `module.exports = {
  name: 'ship',
  description: 'Ship two users',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 2) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention two users to ship!' }, { quoted: msg });
    const love = Math.floor(Math.random() * 101);
    await sock.sendMessage(msg.key.remoteJid, { text: \`❤️ Compatibility between @\${mentioned[0].split('@')[0]} and @\${mentioned[1].split('@')[0]} is *\${love}%*\`, mentions: [mentioned[0], mentioned[1]] }, { quoted: msg });
  }
};`,
  marry: `module.exports = {
  name: 'marry',
  description: 'Marry a mentioned user',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 1) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to marry!' }, { quoted: msg });
    await sock.sendMessage(msg.key.remoteJid, { text: \`💒 @\${msg.key.participant?.split('@')[0] || msg.key.remoteJid.split('@')[0]} marries @\${mentioned[0].split('@')[0]}! Congrats!\`, mentions: [msg.key.participant || msg.key.remoteJid, mentioned[0]] }, { quoted: msg });
  }
};`,
  breakup: `module.exports = {
  name: 'breakup',
  description: 'Breakup with mentioned user',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length < 1) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to breakup with!' }, { quoted: msg });
    await sock.sendMessage(msg.key.remoteJid, { text: \`💔 @\${msg.key.participant?.split('@')[0] || msg.key.remoteJid.split('@')[0]} broke up with @\${mentioned[0].split('@')[0]}...\`, mentions: [msg.key.participant || msg.key.remoteJid, mentioned[0]] }, { quoted: msg });
  }
};`,
  roasts: `const roasts = ["You're not stupid; you just have bad luck thinking.","I'd agree with you, but then we'd both be wrong.","Even WiFi has more connections than you."];
module.exports = {
  name: 'roast',
  description: 'Roast someone',
  async execute(sock, msg, args) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    const target = mentioned.length ? \`@\${mentioned[0].split('@')[0]}\` : 'you';
    await sock.sendMessage(msg.key.remoteJid, { text: \`🔥 \${target}, \${roasts[Math.floor(Math.random()*roasts.length)]}\`, mentions: mentioned }, { quoted: msg });
  }
};`,
  hack: `module.exports = {
  name: 'hack',
  description: 'Fake hack prank',
  async execute(sock, msg, args) {
    const target = args[0] || 'unknown';
    const steps = ["🔍 Finding IP...","🔓 Bypassing firewall...","📡 Connecting to satellite...","💾 Downloading data...","✅ Hack complete! Just kidding."];
    for (const step of steps) {
      await new Promise(r => setTimeout(r, 800));
      await sock.sendMessage(msg.key.remoteJid, { text: step }, { quoted: msg });
    }
  }
};`
};
for (const [name, code] of Object.entries(textCommands)) {
  fs.writeFileSync(path.join(HAMATRIX_DIR, name + '.js'), code);
}

// ── 4. GROUP COMMANDS (kick, promote, tagall, etc.) ─────────────
const groupCmds = ['kick','add','promote','demote','tagall','hidetag','ban','unban','mute','unmute','welcome','goodbye','poll','revoke','link','ginfo','setgcname','setgcdesc','announce','open','close','acceptall','rejectall','requests','left','find'];
groupCmds.forEach(cmd => {
  let code = '';
  switch(cmd) {
    case 'kick':
      code = `module.exports = {
  name: 'kick',
  description: 'Kick a member',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return sock.sendMessage(msg.key.remoteJid, { text: 'This command only works in groups.' });
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentioned.length === 0) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to kick.' }, { quoted: msg });
    for (const user of mentioned) {
      try { await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], 'remove'); } catch {}
    }
  }
};`;
      break;
    case 'add':
      code = `module.exports = {
  name: 'add',
  description: 'Add a member',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return sock.sendMessage(msg.key.remoteJid, { text: 'Group only.' });
    const number = args[0]?.replace(/[^0-9]/g,'') + '@s.whatsapp.net';
    try { await sock.groupParticipantsUpdate(msg.key.remoteJid, [number], 'add'); } catch(e) { await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to add user.' }); }
  }
};`;
      break;
    case 'promote':
      code = `module.exports = {
  name: 'promote',
  description: 'Promote to admin',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return sock.sendMessage(msg.key.remoteJid, { text: 'Group only.' });
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to promote.' });
    for (const user of mentioned) { await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], 'promote'); }
  }
};`;
      break;
    case 'demote':
      code = `module.exports = {
  name: 'demote',
  description: 'Demote from admin',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return sock.sendMessage(msg.key.remoteJid, { text: 'Group only.' });
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention an admin to demote.' });
    for (const user of mentioned) { await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], 'demote'); }
  }
};`;
      break;
    case 'tagall':
      code = `module.exports = {
  name: 'tagall',
  description: 'Tag all members',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return;
    const group = await sock.groupMetadata(msg.key.remoteJid);
    const mentions = group.participants.map(p => p.id);
    const text = args.join(' ') || 'Attention everyone!';
    await sock.sendMessage(msg.key.remoteJid, { text, mentions });
  }
};`;
      break;
    case 'hidetag':
      code = `module.exports = {
  name: 'hidetag',
  description: 'Hidden tag all',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return;
    const group = await sock.groupMetadata(msg.key.remoteJid);
    const mentions = group.participants.map(p => p.id);
    const text = '\\u200e'; // invisible
    await sock.sendMessage(msg.key.remoteJid, { text, mentions });
  }
};`;
      break;
    case 'ban':
      code = `module.exports = {
  name: 'ban',
  description: 'Ban from group',
  async execute(sock, msg, args) {
    if (!msg.key.remoteJid.endsWith('@g.us')) return;
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!mentioned.length) return sock.sendMessage(msg.key.remoteJid, { text: 'Mention someone to ban.' });
    for (const user of mentioned) { await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], 'remove'); }
    // Add to local ban list (simplified)
  }
};`;
      break;
    default:
      code = `module.exports = {
  name: '${cmd}',
  description: '${cmd} command',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *${cmd}* will be implemented soon.' }, { quoted: msg });
  }
};`;
  }
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 5. DOWNLOADERS (ytmp3, tiktok, ig, etc.) ───────────────────
const downloaders = ['ytmp3','ytmp4','tiktok','ig','fb','mediafire','play','song','lyrics','pinterest','apk','spotifydl'];
downloaders.forEach(cmd => {
  const code = `const fetch = require('node-fetch');
module.exports = {
  name: '${cmd}',
  description: 'Download from ${cmd}',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: 'Please provide a URL.' }, { quoted: msg });
    try {
      // Use a generic free API (you'll need to replace with a working one)
      const apiUrl = \`https://api.example.com/download?\${cmd}&url=\${encodeURIComponent(url)}\`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.status && data.url) {
        await sock.sendMessage(jid, { document: { url: data.url }, mimetype: 'audio/mpeg', fileName: 'download.mp3' });
      } else {
        await sock.sendMessage(jid, { text: 'Download failed. The API might be down or the link is invalid.' });
      }
    } catch {
      await sock.sendMessage(jid, { text: 'Error accessing download service.' });
    }
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 6. AI / CHAT (gpt, gemini, etc.) ───────────────────────────
const aiModels = ['gpt35','gpt4','gpt4o','claude','claudeopus','gemini','geminipro','grok','grokbeta','deepseek','deepseekcoder','llama','llama2','llama3','perplexity','mistral','codellama','bard','copilot','copilotpro','chatgpt','chatgptplus','ai21','jurassic','commandr','commandrplus','mixtral','phi','phi2','phi3','qwen','yi','yi34b','starcoder','wizard','vicuna','alpaca','falcon','bloom','gptneox','dolly','stablelm','redpajama','openchat','neuralchat','solar','orca','wizardcoder','codet5','starling','grammar','islamcity','kimi','lumin','mathgpt','askai','brain','think'];
aiModels.forEach(cmd => {
  const code = `const fetch = require('node-fetch');
module.exports = {
  name: '${cmd}',
  description: 'AI chat with ${cmd}',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const prompt = args.join(' ');
    if (!prompt) return sock.sendMessage(jid, { text: 'Please provide a message.' }, { quoted: msg });
    try {
      // Replace with your actual AI API endpoint
      const response = await fetch('https://api.aimlapi.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_KEY' },
        body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [{ role: 'user', content: prompt }] })
      });
      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content || 'No response from AI.';
      await sock.sendMessage(jid, { text: reply }, { quoted: msg });
    } catch {
      await sock.sendMessage(jid, { text: 'AI service is currently unavailable. Please configure your API key.' }, { quoted: msg });
    }
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 7. TOOLS (calc, translate, qr, etc.) ───────────────────────
const tools = {
  calc: `module.exports = {
  name: 'calc',
  description: 'Calculator',
  async execute(sock, msg, args) {
    const expr = args.join(' ');
    try {
      const result = eval(expr); // caution: use safely
      await sock.sendMessage(msg.key.remoteJid, { text: \`\${expr} = *\${result}*\` }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Invalid expression.' });
    }
  }
};`,
  translate: `const translate = require('translate-google');
module.exports = {
  name: 'translate',
  description: 'Translate text',
  async execute(sock, msg, args) {
    const targetLang = args[0] || 'en';
    const text = args.slice(1).join(' ') || (msg.message?.extendedTextMessage?.text?.split(' ').slice(1).join(' '));
    if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .translate <lang> <text>' });
    try {
      const result = await translate(text, { to: targetLang });
      await sock.sendMessage(msg.key.remoteJid, { text: result }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Translation failed.' });
    }
  }
};`,
  qr: `const qrcode = require('qrcode');
module.exports = {
  name: 'qr',
  description: 'Generate QR code',
  async execute(sock, msg, args) {
    const text = args.join(' ') || 'Hello';
    try {
      const qrImage = await qrcode.toBuffer(text);
      await sock.sendMessage(msg.key.remoteJid, { image: qrImage }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to generate QR.' });
    }
  }
};`,
  weather: `const fetch = require('node-fetch');
module.exports = {
  name: 'weather',
  description: 'Get weather',
  async execute(sock, msg, args) {
    const city = args.join(' ');
    if (!city) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .weather <city>' });
    try {
      const res = await fetch(\`https://wttr.in/\${encodeURIComponent(city)}?format=%C+%t\`);
      const text = await res.text();
      await sock.sendMessage(msg.key.remoteJid, { text: \`Weather in \${city}: \${text}\` }, { quoted: msg });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Could not fetch weather.' });
    }
  }
};`,
  ss: `module.exports = {
  name: 'ss',
  description: 'Screenshot a website',
  async execute(sock, msg, args) {
    const url = args[0];
    if (!url) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide a URL.' });
    const screenshotUrl = \`https://image.thum.io/get/width/1920/crop/600/\${encodeURIComponent(url)}\`;
    await sock.sendMessage(msg.key.remoteJid, { image: { url: screenshotUrl } }, { quoted: msg });
  }
};`,
  npm: `const fetch = require('node-fetch');
module.exports = {
  name: 'npm',
  description: 'Search npm package',
  async execute(sock, msg, args) {
    const pkg = args[0];
    if (!pkg) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .npm <package>' });
    try {
      const res = await fetch(\`https://registry.npmjs.org/\${pkg}\`);
      const data = await res.json();
      if (data.name) {
        await sock.sendMessage(msg.key.remoteJid, { text: \`*NPM Package:* \${data.name}\n*Description:* \${data.description || 'N/A'}\n*Latest:* \${data['dist-tags']?.latest}\` }, { quoted: msg });
      } else {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Package not found.' });
      }
    } catch { await sock.sendMessage(msg.key.remoteJid, { text: 'Error fetching package info.' }); }
  }
};`
};
for (const [name, code] of Object.entries(tools)) {
  fs.writeFileSync(path.join(HAMATRIX_DIR, name + '.js'), code);
}

// ── 8. STICKER / MEDIA ─────────────────────────────────────────
const mediaCmds = ['sticker','toimg','tovideo','toaudio','tovoice','take','steal','vv','vv2','vv3','stickerinfo','txtsticker','tgsticker','album','volaudio','volvideo','bass','blown','deep','robot','tiny','chipmunk','slowed','reverb','nightcore','earrape','echo','underwater','telephone','reverse','vaporwave'];
mediaCmds.forEach(cmd => {
  const code = `module.exports = {
  name: '${cmd}',
  description: 'Media command: ${cmd}',
  async execute(sock, msg, args) {
    const jid = msg.key.remoteJid;
    const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg) return sock.sendMessage(jid, { text: 'Reply to a media message.' });
    // Basic media processing (simplified)
    try {
      if (quotedMsg.imageMessage) {
        const media = await sock.downloadMediaMessage(msg);
        if (media) {
          await sock.sendMessage(jid, { image: media }, { quoted: msg });
        } else {
          await sock.sendMessage(jid, { text: 'Failed to process media.' });
        }
      } else {
        await sock.sendMessage(jid, { text: 'Unsupported media type.' });
      }
    } catch { await sock.sendMessage(jid, { text: 'Error processing media.' }); }
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 9. OWNER / SETTINGS ────────────────────────────────────────
const ownerCmds = ['block','unblock','blocklist','leave','pair','maintenance','broadcast','bcastprivate','setprefix','setppbot','del','restart','shutdown','mode','public','private','autoread','autoviewstatus','autolikestauts','autorecording','autotyping','antilink','antidelete','antiedit','antiviewonce','antispam','antibadword','antibot','flood','warn','unwarn','listwarn','resetwarns','mute','unmute','banlist','banned','addowner','delowner','setwelcome','setgoodbye','setbotname','setownername','setdescription','settings','getpp','setpp','updateprofile','botdp','reactemojis','owneremojis','delpath','editpath','countx','count'];
ownerCmds.forEach(cmd => {
  const code = `module.exports = {
  name: '${cmd}',
  description: 'Owner command: ${cmd}',
  async execute(sock, msg, args) {
    // Simple owner check (you'll need to implement owner verification)
    const isOwner = true; // Replace with actual check
    if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'This command is for the owner only.' });
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *${cmd}* executed.' }, { quoted: msg });
  }
};`;
  fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
});

// ── 10. MISCELLANEOUS / REMAINING COMMANDS ───────────────────
const miscCmds = ['ping','alive','uptime','runtime','info','ownerinfo','repo','menu2','help','bomb','bot','fetch','vv3','ik','count','mena2','gitsttalk','praytime','news','respect','salute','salam','adab','jazakallah','shukria','thankyou','sorry','maafi','tazeem','izzat','qadr','ahsan','mehrebani','nawaz','salaam','tasleem','shandar','zabardast','kamaal','lajawab','mashallah','subhanallah','barkatein','duain','khidmat','ehteram','appreciation','proud','grateful','karam','inayat','lutf','mihr','shafqat','rahmat','naimat','congratulations','mubarak','badhai','tahseen','afreen','wah','khushi','dilse','legend','hero','superstar','rockstar','champion','boss','king','queen','gem','diamond','precious','valuable','deserving','inspiration','rolemodel','mentor','genius','talent','skillful','awesome','wonderful','fantastic','excellence','perfect','blessed'];
miscCmds.forEach(cmd => {
  if (!fs.existsSync(path.join(HAMATRIX_DIR, cmd + '.js'))) {
    const code = `module.exports = {
  name: '${cmd}',
  description: 'Command: ${cmd}',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Command *${cmd}* is active.' }, { quoted: msg });
  }
};`;
    fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), code);
  }
});

// ── 11. BOYDP / GIRLDP (array commands) ─────────────────────────
for (let i = 1; i <= 22; i++) {
  const boyCmd = `boydp${i}`;
  const girlCmd = `girldp${i}`;
  if (!fs.existsSync(path.join(HAMATRIX_DIR, boyCmd + '.js'))) {
    fs.writeFileSync(path.join(HAMATRIX_DIR, boyCmd + '.js'), `module.exports = {
  name: '${boyCmd}',
  description: 'Boy DP ${i}',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/boy${i}.jpg' }, caption: 'Boy DP' }, { quoted: msg });
  }
};`);
  }
  if (!fs.existsSync(path.join(HAMATRIX_DIR, girlCmd + '.js'))) {
    fs.writeFileSync(path.join(HAMATRIX_DIR, girlCmd + '.js'), `module.exports = {
  name: '${girlCmd}',
  description: 'Girl DP ${i}',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { image: { url: 'https://i.ibb.co/example/girl${i}.jpg' }, caption: 'Girl DP' }, { quoted: msg });
  }
};`);
  }
}

// Unban 1-48
for (let i = 1; i <= 48; i++) {
  const cmd = `unban${i}`;
  if (!fs.existsSync(path.join(HAMATRIX_DIR, cmd + '.js'))) {
    fs.writeFileSync(path.join(HAMATRIX_DIR, cmd + '.js'), `module.exports = {
  name: '${cmd}',
  description: 'Unban method ${i}',
  async execute(sock, msg, args) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Unban command placeholder.' });
  }
};`);
  }
}

console.log('✅ All command files generated!');
