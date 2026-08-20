const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

let app = null;
let server = null;
let dashboardPassword = null;
let dashboardPort = 0;
let ownerJid = null;
let sock = null;

const sessions = new Map();
const PASSWORD_FILE = path.join(__dirname, 'dashboard_password.json');

function loadPassword() {
  try {
    if (fs.existsSync(PASSWORD_FILE)) {
      const data = JSON.parse(fs.readFileSync(PASSWORD_FILE, 'utf8'));
      if (data.password) return data.password;
    }
  } catch (e) {}
  return null;
}

function savePassword(password) {
  try {
    fs.writeFileSync(PASSWORD_FILE, JSON.stringify({ password }, null, 2));
  } catch (e) {
    console.error('Failed to save dashboard password:', e.message);
  }
}

function generatePassword() {
  return crypto.randomBytes(4).toString('hex');
}

function generateToken() {
  return crypto.randomBytes(16).toString('hex');
}

function getCookie(req, name) {
  const header = req.headers.cookie || '';
  const parts = header.split(';');
  for (const part of parts) {
    const [key, val] = part.trim().split('=');
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}

function setSessionCookie(res, token) {
  res.setHeader('Set-Cookie', `hamatrix_session=${token}; HttpOnly; Path=/`);
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', 'hamatrix_session=; HttpOnly; Path=/; Max-Age=0');
}

function isAuthenticated(req) {
  const token = getCookie(req, 'hamatrix_session');
  return token && sessions.has(token);
}

function startWebServer(socket, owner) {
  if (server) return { port: dashboardPort, password: dashboardPassword };

  sock = socket;
  ownerJid = owner || null;

  // Load existing password or generate new one
  dashboardPassword = process.env.DASHBOARD_PASSWORD || loadPassword();
  if (!loadPassword() && dashboardPassword) savePassword(dashboardPassword);
  if (!dashboardPassword) {
    dashboardPassword = generatePassword();
    savePassword(dashboardPassword);
  }
  global.dashboardPassword = dashboardPassword;

  dashboardPort = parseInt(process.env.PORT) || 3000;

  app = express();
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.urlencoded({ extended: true }));

  // Login page
  app.get('/login', (req, res) => {
    if (isAuthenticated(req)) return res.redirect('/');
    res.render('login', { error: null, message: req.query.msg || null });
  });

  app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === dashboardPassword) {
      const token = generateToken();
      sessions.set(token, true);
      setSessionCookie(res, token);
      return res.redirect('/');
    }
    res.render('login', { error: 'Invalid password', message: null });
  });

  app.get('/logout', (req, res) => {
    const token = getCookie(req, 'hamatrix_session');
    if (token) sessions.delete(token);
    clearSessionCookie(res);
    res.redirect('/login');
  });

  // Dashboard
  app.get('/', (req, res) => {
    if (!isAuthenticated(req)) return res.redirect('/login');
    const info = {
      botName: 'HAMATRIX AI',
      status: 'Online',
      user: sock?.user?.name || sock?.user?.pushName || 'WhatsApp User',
      platform: sock?.user?.platform || 'Web',
      uptime: Math.floor(process.uptime()),
      commands: global.commandList ? global.commandList.length : 'N/A',
      memory: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1) + ' MB',
      time: new Date().toLocaleString(),
    };
    res.render('dashboard', { info });
  });

  // Change password
  app.post('/change-password', (req, res) => {
    if (!isAuthenticated(req)) return res.redirect('/login');
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 4) {
      return res.redirect('/?msg=' + encodeURIComponent('Password too short (min 4 chars)'));
    }
    dashboardPassword = newPassword;
    global.dashboardPassword = newPassword;
    savePassword(newPassword);
    sessions.clear();
    clearSessionCookie(res);
    if (sock && ownerJid) {
      sock.sendMessage(ownerJid, {
        text: `?? New dashboard password: ${newPassword}`
      }).catch(() => {});
    }
    res.redirect('/login?msg=' + encodeURIComponent('Password updated. Please log in again.'));
  });

  // Command management
  app.get('/commands', (req, res) => {
    if (!isAuthenticated(req)) return res.redirect('/login');
    const commandList = global.commandList || [];
    const states = global.commandStates || {};
    res.render('commands', { commands: commandList, states });
  });

  app.post('/toggle-command', (req, res) => {
    if (!isAuthenticated(req)) return res.redirect('/login');
    const { command, enabled } = req.body;
    if (global.commandStates && command) {
      global.commandStates[command] = enabled === '1';
    }
    res.redirect('/commands');
  });

  server = app.listen(dashboardPort, '0.0.0.0', () => {
    console.log(`Dashboard running at http://localhost:${dashboardPort}`);
  });

  return { port: dashboardPort, password: dashboardPassword };
}

function stopWebServer() {
  if (server) {
    server.close();
    server = null;
    app = null;
    sessions.clear();
  }
}

module.exports = { startWebServer, stopWebServer };
