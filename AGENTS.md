<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep section tracking client-side in the shared site header, using section positions and the sticky header height so desktop and mobile menus share the same active state without server dependencies.
- Retain TanStack Start with Nitro disabled and explicitly prerender public content routes; rendering is build-time only for static GitHub Pages deployment.
- Use Vite BASE_URL for router and public assets; repository subdirectories must resolve the same site without redesign.
- npm run build packages only prerendered client files into dist via postbuild; GitHub Actions deploys dist, never server bundles.
- Export managed asset pointers into the static artifact during packaging so production does not rely on Lovable asset proxy paths.
