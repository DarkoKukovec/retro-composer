Retro composer is a single-page React app for composing chiptune songs on a keyboard. It is built with Vite, React 19, React Router 7, Tailwind CSS 4 and [Tone.js](https://tonejs.github.io/).

Requires Node.js >= 24.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode on [http://localhost:5173](http://localhost:5173).
The page reloads when you make edits.

### `npm test`

Runs the test suite once with [Vitest](https://vitest.dev/) and exits.

### `npm run build`

Type-checks the project and builds it for production to the `dist` folder.
The build is minified and the asset filenames include content hashes.

### `npm run preview`

Serves the production build in `dist` on [http://localhost:4173](http://localhost:4173).

### `npm run lint`

Checks formatting with Prettier and runs ESLint.

### `npm run deploy`

Builds the app and publishes `dist` to GitHub Pages (via `gh-pages`). The site is served at https://retro.kuk.is; the `CNAME` file in `public` maps the custom domain.

## Project structure

- `index.html` — Vite entry, loaded by the dev server and the build.
- `public/` — static assets (icons, `manifest.json`, `CNAME`, `robots.txt`) copied to the build output as-is.
- `src/` — application source; `src/main` entry is `src/index.tsx`.
- `vite.config.ts` — Vite configuration (React + Tailwind plugins).
- `vitest.config.ts` — Vitest configuration; tests live next to the components in `*.test.tsx` files with setup in `src/test/setup.ts`.
- `tsconfig.json` — project references for `tsconfig.app.json` (source) and `tsconfig.node.json` (config files).
- `eslint.config.js` — flat ESLint configuration.
