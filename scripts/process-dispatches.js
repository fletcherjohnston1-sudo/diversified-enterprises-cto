const fs = require('fs');
const path = require('path');

const DISPATCH_DIR = '/home/clawd/.openclaw/workspace/mission-control/dispatches';
const PROCESSED_DIR = path.join(DISPATCH_DIR, 'processed');

if (!fs.existsSync(DISPATCH_DIR)) process.exit(0);
if (!fs.existsSync(PROCESSED_DIR)) fs.mkdirSync(PROCESSED_DIR, { recursive: true });

const files = fs.readdirSync(DISPATCH_DIR).filter(f => f.endsWith('.json') && f.startsWith('task-'));

for (const file of files) {
  const filePath = path.join(DISPATCH_DIR, file);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    if (data.status === 'pending') {
      console.log(JSON.stringify(data));
    }
  } catch (e) {}
}
