import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root = process.cwd();
const names = [
  ...Array.from({length:8},(_,i)=>`purple-car.part${String(i).padStart(2,'0')}`),
  ...Array.from({length:8},(_,i)=>`purple-car.tail${String(i).padStart(2,'0')}`),
];
let b64='';
for (const name of names) b64 += (await fs.readFile(path.join(root,name),'utf8')).trim();
const hash=crypto.createHash('sha256').update(b64).digest('hex');
console.log(`B64 ${b64.length} ${hash}`);
if (b64.length !== 86184 || hash !== 'c9aedb96ca1e42ca19d68e11fbc8125e36d16cf41198af3f6b0ff4e95f1cf135') throw new Error('Base64 transfer mismatch');
const data=Buffer.from(b64,'base64');
const outDir=path.join(root,'public','winning','hall-of-frame');
await fs.mkdir(outDir,{recursive:true});
const out=path.join(outDir,'purple-car-rental-winner.webp');
await fs.writeFile(out,data);
const meta=await sharp(out).metadata();
const stat=await fs.stat(out);
console.log(`OUTPUT ${meta.width}x${meta.height} ${Math.round(stat.size/1024)}KB ${meta.format}`);
