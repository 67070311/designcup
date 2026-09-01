import fs from "node:fs/promises";
import path from "node:path";

const assets = [
  ["recipe-fridge.webp", ["voting-01.b64"]],
  ["cooking-recipes.webp", ["voting-02.b64"]],
  ["sushi-community.webp", ["voting-03.b64"]],
  ["smart-recipes-ai.webp", ["voting-04.b64"]],
  ["pizza-delivery.webp", ["voting-05a.b64", "voting-05b.b64"]],
  ["burger-ordering.webp", ["voting-06.b64"]],
  ["laresto-food-ui.webp", ["voting-07.b64"]],
  ["grocery-market.webp", ["voting-08.b64"]],
  ["fresh-grocery.webp", ["asset-fresh-grocery.b64"]],
  ["fast-food-yellow.webp", ["asset-fast-food-yellow.b64"]],
  ["healthy-food.webp", ["asset-healthy-food.b64"]],
  ["food-delivery-mobile.webp", ["asset-food-delivery-mobile.b64"]],
];

const outDir = path.join(process.cwd(), "public/challenge/voting-submissions");
await fs.mkdir(outDir, { recursive: true });

for (const [fileName, chunks] of assets) {
  let encoded = "";
  for (const chunk of chunks) {
    encoded += (await fs.readFile(path.join(process.cwd(), chunk), "utf8")).replace(/\s+/g, "");
  }

  const bytes = Buffer.from(encoded, "base64");
  await fs.writeFile(path.join(outDir, fileName), bytes);
  console.log(`${fileName}: ${bytes.length} bytes`);
}
