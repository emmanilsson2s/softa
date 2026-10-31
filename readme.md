# Welcome to your Lovable project

## Static GitHub Pages deployment

The website retains TanStack Start but renders `/` once during the build. All
sections are anchors within that single route. There are no user-specific
loaders, server functions, authentication, or backend features. Nitro is disabled.
The temporary TanStack renderer is needed only while building, never in production.

```sh
bun install --frozen-lockfile
VITE_BASE_PATH=/your-repository/ npm run build
```

**Deploy exactly `dist/`.** The npm `postbuild` step extracts `dist/client/`,
exports the existing logo, verifies local asset references, and removes all server
output. The resulting `dist/index.html`, JavaScript, CSS, images and `.nojekyll`
are the complete deployable site. Do not deploy an intermediate `dist/server/`.

Use `VITE_BASE_PATH=/` for a user/organization Pages repository or a custom domain.
For project repositories use `/repository-name/`. The workflow defaults to the
repository name; override via a GitHub repository Actions variable named
`VITE_BASE_PATH`. In GitHub Settings → Pages select **GitHub Actions** as the source.
The workflow runs on pushes to `main` or manually; change its branch if needed.

The build needs internet to export the existing managed logo into the artifact.
The deployed logo is local; no Lovable hosting proxy is required by visitors.
The existing Google Fonts stylesheet remains unchanged and loads static font
files over HTTPS independently of the repository path. No Node.js process,
Nitro server, SSR runtime, secrets or backend is deployed.

Deployment checks: `npm run test:deployment`; `npm run build` also runs
`scripts/verify-static.mjs` and refuses missing prerendered content/assets.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
