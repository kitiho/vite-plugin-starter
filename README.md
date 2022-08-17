# vite-plugin-starter

For developing Vite plugin, it's just a starter.

> Mostly Forked from [Anthony Fu](https://github.com/antfu)

## Install

```bash
npm i
npm run dev
```

Go to `example` folder, add your plugin, and start develop.

```ts
// example/vite.config.ts

import MyPlugin from 'vite-plugin-starter'
export default {
  plugins: [
    MyPlugin()
  ],
}

```

## License

[MIT](./LICENSE) License © 2022 [Kitiho](https://github.com/kitiho)
