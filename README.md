# NewSwap Web

Website: [newswap.org](https://newswap.org/)

## Install Dependencies

```bash
yarn
```

## Environments

**Dev:** `.env`

**TestNet:** `.env.testnet`

**Production:** `.env.production`

## Development

```bash
yarn dev
```

_Default_ is **Dev**

- `yarn dev:testnet`

- `yarn dev:production`

## Build

```bash
yarn build
```

_Default_ build is **TestNet**

- `yarn build:dev`

- `yarn build:testnet`

- `yarn build:production`

### Run Build

```bash
yarn start
```

Run with last build

## Export HTML files

Create a build and export it's static HTML files to **html** folder

```bash
yarn export
```

_Default_ export is **TestNet**

- `yarn export:dev`

- `yarn export:testnet`

- `yarn export:production`

## Branches

![Branches](./docs/assets/repo-branches.gif)

## Contributing

#### Localization

Translation Files: **./public/locales/\*.json**

#### Formatting Your Code

Run following command to follow the formatting rules in this repo before making a commit.

```bash
yarn prettier
```
