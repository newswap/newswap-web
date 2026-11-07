# NewSwap Web

Website: [newswap.org](https://newswap.org/)

## Requirements

Use a supported Node.js 22 or newer LTS release (`nvm use`). Node.js 16 is no longer supported.

## Install Dependencies

```bash
npm ci
```

## Environments

**Dev:** `.env`

**TestNet:** `.env.testnet`

**Production:** `.env.production`

## Development

```bash
npm run dev
```

_Default_ is **Dev**

- `npm run dev:testnet`

- `npm run dev:production`

## Build

```bash
npm run build
```

_Default_ build is **TestNet**

- `npm run build:dev`

- `npm run build:testnet`

- `npm run build:production`

### Run Build

```bash
npm run start
```

Run with last build

## Export HTML files

Create a build and export it's static HTML files to **html** folder

```bash
npm run export
```

_Default_ export is **TestNet**

- `npm run export:dev`

- `npm run export:testnet`

- `npm run export:production`

## Branches

![Branches](./docs/assets/repo-branches.gif)

## Contributing

#### Localization

Translation Files: **./public/locales/\*.json**

## Formatting Your Code

Always check your code before making a commit. Some useful tools integrated in this project.

**Lint** (Eslint)

```bash
npm run lint
```

**Formatting Check** (Prettier)

```bash
npm run fc
```

**Formatting Fix** (Prettier)

```bash
npm run ff
```

## Dependency maintenance

Use npm and commit `package-lock.json`. Install reproducibly with `npm ci`; do not mix Yarn and npm lockfiles.

Run `npm audit`, `npm run lint`, and `npm run build:dev` after dependency updates. Check both desktop and mobile pages, navigation, language switching, Markdown content, and image loading.

The project preserves Bootstrap 4.5.2 CSS and uses React 18 for component compatibility. Webpack's built-in asset modules replace `next-images` and `raw-loader`.

`npm run export:dev`, `npm run export:testnet`, and `npm run export:production` produce the static site directly in `html/` with Next.js `output: "export"`; the removed `next export` command is no longer needed. Use `npm run build:<environment>` and `npm start` for a Node server deployment.

### Upgrade verification (2026-11-06)

Next.js 16.4.5, React 18.3.1, and Swiper 14.4.0 were verified on Node.js 22.23.4. The dependency audit reported zero known vulnerabilities. Lint, formatting, the production build, and static exports for all three environments passed.

Browser regression checks covered all 26 pages at desktop (1440px) and mobile (390px) widths. With animations disabled, all 52 screenshots matched the original; text, link destinations, and image loading were preserved. Language switching, FAQ language visibility, article navigation, mobile menu behavior, and 404 handling passed. External application transactions and form submissions were not performed.

### Extended regression checks

All 26 pages were checked in English and Chinese at desktop and mobile widths (104 page states, 2,043 assertions and 64 internal navigation clicks). Dropdowns, repeated mobile-menu toggling, sticky navigation, back-to-top controls, language persistence, FAQ visibility and article navigation passed. Anchor navigation and browser back/forward passed; 12 additional responsive checks covered 320px, 768px and 1920px widths.

Existing issues remain: FAQ overflows at 320px in both the original and upgraded versions (document width 369px); Governance and Coming Soon are placeholders. Of 61 external URLs checked, 44 were reachable, 9 returned 404 and 8 failed to connect or timed out. These external availability issues are not resolved by dependency upgrades. No real transactions, wallet signatures or form submissions were performed.
