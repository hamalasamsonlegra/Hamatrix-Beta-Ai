// lib/btns.js — ourin-baileys integration (CommonJS wrapper)

let _ourin = null;
let _loadPromise = null;

async function loadOurin() {
  if (_ourin) return _ourin;
  if (!_loadPromise) {
    _loadPromise = import('ourin-baileys')
      .then(module => { _ourin = module; return module; })
      .catch(err => { console.error('[ourin-baileys] load failed:', err.message); _ourin = null; throw err; });
  }
  return _loadPromise;
}

function patchButtonBuild(btn) {
  if (!btn || typeof btn.toCard !== 'function') return btn;
  const originalBuild = btn.build;
  if (originalBuild) {
    btn.build = async function (jid, options) {
      const card = await this.toCard();
      const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
      return generateWAMessageFromContent(
        jid,
        { ...(this._extraPayload || {}), interactiveMessage: { ...card, contextInfo: this._contextInfo } },
        { ...(options || {}) }
      );
    };
  }
  return btn;
}

// ─── Parse old interactiveButtons payload ─────────────────
function parseInteractiveButtons(interactiveButtons) {
  const buttons = [];
  const sections = [];
  let buttonText = 'Choose';

  for (const item of interactiveButtons || []) {
    const name = item.name;
    let params = {};
    try {
      params = JSON.parse(item.buttonParamsJson || '{}');
    } catch {}

    switch (name) {
      case 'quick_reply':
        buttons.push({ text: params.display_text || 'Option', id: params.id || '' });
        break;
      case 'cta_url':
        buttons.push({ text: params.display_text || 'Open', url: params.url || '' });
        break;
      case 'cta_call':
        buttons.push({ text: params.display_text || 'Call', call: params.phone_number || '' });
        break;
      case 'cta_copy':
        buttons.push({ text: params.display_text || 'Copy', copy: params.copy_code || '' });
        break;
      case 'cta_reminder':
        buttons.push({ text: params.display_text || 'Remind', reminder: params.reminder || '' });
        break;
      case 'single_select':
        if (params.title) buttonText = params.title;
        for (const section of (params.sections || [])) {
          const rows = (section.rows || []).map(r => ({
            title: r.title || r.header || '',
            description: r.description || '',
            id: r.id || r.rowId || ''
          }));
          sections.push({ title: section.title || '', rows });
        }
        break;
      default:
        // Unknown type; try to treat as quick reply if it has display_text and id
        if (params.display_text) {
          buttons.push({ text: params.display_text, id: params.id || '' });
        }
    }
  }

  return { buttons, sections, buttonText };
}

// ─── Normalize single button object ───────────────────────
function normalizeButton(b) {
  if (!b) return { type: 'reply', text: 'Option', id: 'btn_' + Math.random().toString(36).slice(2,7) };
  if (b.url) return { type: 'url', text: b.text || b.display_text || 'Open', url: b.url };
  if (b.copy || b.copyCode) return { type: 'copy', text: b.text || b.display_text || 'Copy', copy: b.copy || b.copyCode };
  if (b.call || b.callNumber) return { type: 'call', text: b.text || b.display_text || 'Call', call: b.call || b.callNumber };
  if (b.reminder) return { type: 'reminder', text: b.text || b.display_text || 'Remind', reminder: b.reminder };
  let text = b.text || b.label || b.display_text || 'Option';
  let id = b.id || b.buttonId || '';
  if (!id && b.buttonParamsJson) {
    try { const p = JSON.parse(b.buttonParamsJson); text = p.display_text || text; id = p.id || text; } catch {}
  }
  return { type: 'reply', text, id };
}

// ─── Build a ourin Button from options ────────────────────
async function buildButton(conn, opts) {
  const { Button } = await loadOurin();
  const btn = new Button(conn);
  patchButtonBuild(btn);

  if (opts.title) btn.setTitle(opts.title);
  if (opts.subtitle) btn.setSubtitle(opts.subtitle);
  if (opts.body || opts.text) btn.setBody(opts.body || opts.text);
  if (opts.footer) btn.setFooter(opts.footer);
  if (opts.image) btn.setImage(opts.image);
  if (opts.media) btn.setMedia(opts.media);

  // Add action buttons
  for (const raw of (opts.buttons || [])) {
    const b = normalizeButton(raw);
    switch (b.type) {
      case 'url': btn.addUrl(b.text, b.url); break;
      case 'copy': btn.addCopy(b.text, b.copy); break;
      case 'call': btn.addCall(b.text, b.call); break;
      case 'reminder': btn.addReminder(b.text, b.reminder); break;
      default: btn.addReply(b.text, b.id);
    }
  }

  // Add list selection if sections present
  if (opts.sections && opts.sections.length) {
    btn.addSelection(opts.buttonText || 'Choose');
    for (const section of opts.sections) {
      btn.makeSection(section.title || '', section.highlight_label);
      for (const row of (section.rows || [])) {
        btn.makeRow(row.header || '', row.title, row.description || '', row.id || row.rowId || '');
      }
    }
  }

  return btn;
}

// ─── sendBtn (supports ourin, fallback text) ─────────────
async function sendBtn(conn, jid, opts_or_m, textArg, buttonsArg, extraArg) {
  let opts;
  if (textArg !== undefined && buttonsArg !== undefined) {
    opts = { text: textArg, buttons: buttonsArg, ...(extraArg || {}) };
  } else if (opts_or_m && typeof opts_or_m === 'object' && !opts_or_m.key) {
    opts = opts_or_m;
  } else {
    opts = {};
  }
  try {
    const btn = await buildButton(conn, opts);
    await btn.send(jid);
    return;
  } catch (e) {
    console.error('[sendBtn] ourin failed, fallback to text:', e.message);
  }
  // Fallback plain text
  const lines = [];
  if (opts.title) lines.push('*' + opts.title + '*');
  if (opts.text || opts.body) lines.push(opts.text || opts.body);
  (opts.buttons || []).forEach((b, i) => {
    const nb = normalizeButton(b);
    lines.push(`  [${i+1}] ${nb.text}`);
  });
  if (opts.footer) lines.push('\n_' + opts.footer + '_');
  await conn.sendMessage(jid, { text: lines.join('\n') });
}

// ─── sendList (uses sections) ─────────────────────────────
async function sendList(conn, jid, opts_or_m, textArg, sectionsArg, buttonTextArg) {
  let opts;
  if (textArg !== undefined && sectionsArg !== undefined) {
    opts = { text: textArg, sections: sectionsArg, buttonText: buttonTextArg || 'Choose' };
  } else if (opts_or_m && typeof opts_or_m === 'object' && !opts_or_m.key) {
    opts = opts_or_m;
  } else {
    opts = {};
  }
  try {
    const btn = await buildButton(conn, opts);
    await btn.send(jid);
    return;
  } catch (e) {
    console.error('[sendList] ourin failed, fallback to text:', e.message);
  }
  // Fallback
  const rows = (opts.sections || []).flatMap(s => s.rows || []);
  const lines = [];
  if (opts.title) lines.push('*' + opts.title + '*');
  if (opts.text) lines.push(opts.text);
  rows.forEach((r, i) => lines.push(`  [${i+1}] *${r.title}*${r.description ? ' — ' + r.description : ''}`));
  if (opts.footer) lines.push('\n_' + opts.footer + '_');
  await conn.sendMessage(jid, { text: lines.join('\n') });
}

// ─── sendUrlBtn (builds buttons with url/copy/call) ───────
async function sendUrlBtn(conn, jid, opts = {}) {
  const buttons = [];
  if (opts.url) buttons.push({ text: opts.urlText || '🔗 Open', url: opts.url });
  if (opts.copyCode) buttons.push({ text: opts.copyText || '📋 Copy', copy: opts.copyCode });
  if (opts.callNumber) buttons.push({ text: opts.callText || '📞 Call', call: opts.callNumber });
  if (opts.extraButtons) opts.extraButtons.forEach(b => buttons.push(b));
  return sendBtn(conn, jid, {
    text: opts.text || '',
    title: opts.title || '',
    footer: opts.footer || '',
    buttons
  });
}

// ─── sendInteractiveMessage (handles interactiveButtons) ──
async function sendInteractiveMessage(conn, jid, opts) {
  if (!opts) return;

  // If legacy interactiveButtons payload is present, parse it.
  if (opts.interactiveButtons) {
    const parsed = parseInteractiveButtons(opts.interactiveButtons);
    return sendBtn(conn, jid, {
      text: opts.text || '',
      footer: opts.footer || '',
      buttons: parsed.buttons,
      sections: parsed.sections,
      buttonText: parsed.buttonText
    });
  }

  // If modern buttons/sections are present, use sendBtn.
  if (opts.buttons || opts.sections) {
    return sendBtn(conn, jid, opts);
  }

  // Fallback text
  const text = opts.text || opts.title || 'Interactive message';
  await conn.sendMessage(jid, { text });
}

async function getOurin() { return loadOurin(); }

module.exports = {
  sendBtn,
  sendList,
  sendUrlBtn,
  sendInteractiveMessage,
  getOurin
};
