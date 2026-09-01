import fs from 'node:fs/promises';
const p = JSON.parse(await fs.readFile('package.json','utf8'));
p.scripts ||= {};
p.scripts['install:latest-purple-car'] = 'node install-latest-purple-car.mjs';
await fs.writeFile('package.json', JSON.stringify(p,null,2)+'\n');
