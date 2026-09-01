import fs from 'node:fs';
import path from 'node:path';
const input = fs.readFileSync('car-rental-winner.b64','utf8');
const out = 'public/winning/hall-of-frame/car-rental-winner.webp';
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, Buffer.from(input, 'base64'));
console.log(out, fs.statSync(out).size);
