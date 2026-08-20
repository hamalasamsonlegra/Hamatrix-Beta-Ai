const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('📦 node_modules not found. Installing dependencies...');
  try {
    execSync('npm install --no-fund --no-audit --only=prod', { stdio: 'inherit' });
    console.log('✅ Dependencies installed.');
  } catch (e) {
    console.error('❌ Failed to install dependencies:', e.message);
    process.exit(1);
  }
} else {
  console.log('✅ node_modules already exists. Skipping install.');
}
