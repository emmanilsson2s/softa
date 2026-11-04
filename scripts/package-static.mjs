import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("dist");
const staging = resolve(".static-export");
const html = await readFile(resolve(output, "client/index.html"), "utf8");
if (!html.includes("Textilier, framtagna för ert sortiment")) {
  throw new Error("The home page was not prerendered. Refusing to deploy a server-only build.");
}
await rm(staging, { recursive: true, force: true });
await cp(resolve(output, "client"), staging, { recursive: true });

// Export the existing managed logo into the artifact; Pages never calls its proxy.
const logo = JSON.parse(await readFile("src/assets/softa-interior-logo.png.asset.json", "utf8"));
const response = await fetch(new URL(logo.url, "https://fridashemsida.lovable.app"));
if (!response.ok || !response.headers.get("content-type")?.includes("image/png")) {
  throw new Error("Unable to export the existing logo. Static deployment aborted.");
}
await mkdir(resolve(staging, "images"), { recursive: true });
await writeFile(resolve(staging, "images/softa-interior-logo.png"), Buffer.from(await response.arrayBuffer()));

// Static redirect pages for URLs from the old website. GitHub Pages cannot send
// real HTTP 301 redirects, so these are client-side meta-refresh pages.
const base = `/${(process.env.VITE_BASE_PATH ?? "/").replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
const redirects = [
  { from: "kontakt", to: "#contact", label: "Kontakt" },
  { from: "om-softa-interior", to: "#story", label: "Om Softa Interiör" },
  { from: "monster-design", to: "#development", label: "Mönster och design" },
];
for (const { from, to, label } of redirects) {
  const target = `${base}${to}`;
  await mkdir(resolve(staging, from), { recursive: true });
  await writeFile(
    resolve(staging, from, "index.html"),
    `<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <title>${label} – Softa Interiör</title>
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="https://www.softainterior.se/${to}" />
  </head>
  <body>
    <p>Sidan har flyttats. <a href="${target}">Klicka här för att komma vidare</a>.</p>
  </body>
</html>
`,
  );
}

// Custom 404 page served by GitHub Pages for unknown URLs.
await writeFile(
  resolve(staging, "404.html"),
  `<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sidan hittades inte – Softa Interiör</title>
    <meta name="robots" content="noindex" />
    <style>
      body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
             background: #f5f1ea; color: #2e3a45; font-family: Georgia, 'Times New Roman', serif; }
      main { max-width: 32rem; padding: 2rem; text-align: center; }
      h1 { font-size: 3.5rem; margin: 0; }
      p { font-family: system-ui, sans-serif; line-height: 1.6; }
      a { display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #2e3a45;
          color: #f5f1ea; text-decoration: none; font-family: system-ui, sans-serif; }
    </style>
  </head>
  <body>
    <main>
      <h1>404</h1>
      <p>Sidan du letar efter finns inte eller har flyttats. Välkommen till vår nya webbplats.</p>
      <a href="${base}">Till startsidan</a>
    </main>
  </body>
</html>
`,
);

await writeFile(resolve(staging, ".nojekyll"), "");
// Remove build metadata, not website files. Only static browser files survive.
await rm(resolve(staging, ".lovable"), { recursive: true, force: true });
await rm(output, { recursive: true, force: true });
await rename(staging, output);
console.log("Static website exported to dist/ (no server runtime).");