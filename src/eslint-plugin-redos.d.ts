declare module 'eslint-plugin-redos' {
  import type { ESLint, Linter } from 'eslint'
  type Value<R> = R[keyof R]

  const rcplugin: {
    plugins: [string]
    rules: {
      'no-vulnerable': Value<Exclude<ESLint.Plugin['rules'], undefined>>
    }
    configs: {
      recommended: ESLint.ConfigData<Linter.RulesRecord>
    }
  }
  export default rcplugin
}
