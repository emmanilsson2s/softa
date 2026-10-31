import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const base = `/${(process.env.VITE_BASE_PATH ?? "").replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
const html = await readFile("dist/index.html", "utf8");
if (!html.includes("<h1") || !html.includes('id="contact"')) throw new Error("Missing prerendered page content.");
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const url = match[1].replaceAll("&amp;", "&");
  if (/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
  if (!url.startsWith(base)) throw new Error(`Asset outside configured base: ${url}`);
  await access(resolve("dist", decodeURIComponent(url.slice(base.length).split("?")[0])));
}
const entries = await readdir("dist");
for (const name of ["server", "client", "_worker.js", "wrangler.json", "package.json"]) {
  if (entries.includes(name)) throw new Error(`Server/build artifact included: ${name}`);
}
if (html.includes("/__l5e/")) throw new Error("Logo still depends on the hosting proxy.");
console.log(`Verified static HTML and local asset references for ${base}; deploy dist/.`);