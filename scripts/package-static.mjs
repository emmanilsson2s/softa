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
await writeFile(resolve(staging, ".nojekyll"), "");
// Remove build metadata, not website files. Only static browser files survive.
await rm(resolve(staging, ".lovable"), { recursive: true, force: true });
await rm(output, { recursive: true, force: true });
await rename(staging, output);
console.log("Static website exported to dist/ (no server runtime).");