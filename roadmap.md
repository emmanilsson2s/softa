# Roadmap

- [x] Place uploaded Softa Interior logo in header + favicon
- [x] Extract contact details from https://www.softainterior.se/ and replace placeholders on the site
- [x] Configure explicit static prerendering and repository base paths
- [x] Package static-only dist output and add GitHub Pages workflow
- [x] Check deployment path tests, preview interactions, and document deployment
- [ ] Verify production artifact end-to-end: blocked because the automatic sandbox check does not expose dist; GitHub Actions must run npm run build and its static artifact checks
- [x] Default asset paths to /softa/ and align build-time and browser router prefixes to /softa
- [x] Check corrected /softa/ preview asset paths and deployment tests; automatic build check reports build OK
