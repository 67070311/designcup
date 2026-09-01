import fs from "node:fs/promises";

const categories = "app/winning/hall-of-frame/categories.tsx";
let text = await fs.readFile(categories, "utf8");
text = text.replace(
  'image: "/winning/hall-of-frame/covers/food-delivery.webp"',
  'image: "/challenge/voting-submissions/food-delivery-mobile.webp"',
);
text = text.replaceAll('h-[255px] overflow-hidden bg-white', 'h-[230px] overflow-hidden bg-white p-3');
text = text.replaceAll('quality={92}', 'quality={100}');
text = text.replaceAll('className="object-cover"', 'className="object-contain"');
text = text.replaceAll(/\s+unoptimized/g, "");
await fs.writeFile(categories, text, "utf8");

for (const file of [
  "app/winning/hall-of-frame/hero.tsx",
  "app/winning/hall-of-frame/recent-winner.tsx",
]) {
  let source = await fs.readFile(file, "utf8");
  source = source.replaceAll(/\s+unoptimized/g, "");
  source = source.replaceAll('quality={100}', 'quality={92}');
  await fs.writeFile(file, source, "utf8");
}

console.log("Hall of Fame image rendering optimized");
