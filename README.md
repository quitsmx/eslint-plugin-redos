# eslint-plugin-redos

Wrapper that allows [eslint-plugin-redos](https://www.npmjs.com/package/eslint-plugin-redos) to work with eslint flat configs.

## Install

You can install the package with the following command.

```bash
pnpm add -D @quitsmx/eslint-plugin-redos
```

Then add to your eslint.config.mjs

```js
import { defineConfig } from 'eslint/config'
import redos from '@quitsmx/eslint-plugin-redos'
// ... other plugins

export default defineConfig([
  // ... other configs
  redos.configs['flat/recommended'],
])
```

See more about ReDoS in the [recheck](https://makenowjust-labs.github.io/recheck/) site.

## License

The [MIT License](LICENCE)
© 2025-present Alberto Martínez

### eslint-plugin-redos License

The [MIT License](https://github.com/makenowjust-labs/recheck/blob/main/LICENSE)
2020-2025 © TSUYUSATO "MakeNowJust" Kitsune
