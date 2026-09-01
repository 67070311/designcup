import fs from 'node:fs';
import path from 'node:path';

const skip = new Set(['node_modules', '.next', '.git']);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/^Rectangle\s+(40|41|42|43|44|45|46|47)/i.test(entry.name)) console.log(full);
  }
}

walk('.');
