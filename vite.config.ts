// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { normalizeBasePath } from "./scripts/base-path";

const base = normalizeBasePath(process.env["VITE_BASE_PATH"]);

export default defineConfig({
  // TanStack renders once at build time; no Nitro server is built or deployed.
  nitro: false,
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: base },
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
    },
  },
});
