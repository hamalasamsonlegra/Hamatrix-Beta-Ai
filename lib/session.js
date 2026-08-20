const fs = require('fs');
const path = require('path');
const { SESSION_DIR } = require('../config.js');

function sessionExists() {
  return fs.existsSync(path.join(SESSION_DIR, 'creds.json'));
}

function deleteSession() {
  try {
    if (fs.existsSync(SESSION_DIR)) fs.rmSync(SESSION_DIR, { recursive: true, force: true });
    return true;
  } catch {
    return false;
  }
}

module.exports = { sessionExists, deleteSession };
