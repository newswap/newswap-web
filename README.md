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

- `yarn dev:testnet`

- `yarn dev:production`

## Build

```bash
yarn build
```
*Default* build is *TestNet*

- `yarn dev:dev`

- `yarn dev:testnet`

- `yarn dev:production`

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

*Default* export is *TestNet*

- `yarn export:dev`

- `yarn export:testnet`

- `yarn export:production`