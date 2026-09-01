import fs from "node:fs/promises";
const file = "app/winning/hall-of-frame/categories.tsx";
const before = await fs.readFile(file, "utf8");
const after = before.replaceAll("/challenge/current-submission/submission-", "/challenge/current-submission/current-");
await fs.writeFile(file, after, "utf8");
console.log("fixed current-submission paths");
