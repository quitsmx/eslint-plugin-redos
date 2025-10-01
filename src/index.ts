import type { ESLint, Linter } from 'eslint'

import rcplugin from 'eslint-plugin-redos'

/**
 * Disallow {@link https://makenowjust-labs.github.io/recheck/docs/intro/ |ReDoS}
 * vulnerable `RegExp` literals.
 */
export interface NoVulnerableOptions {
  /** @default true */
  ignoreErrors?: boolean
  /** @default [] */
  permittableComplexities?: ('polynomial' | 'exponential')[]
  /** @default false */
  cache?: boolean | { location: string; strategy: 'aggressive' | 'conservative' }
  accelerationMode?: 'auto' | 'on' | 'off'
  attackLimit?: number
  attackTimeout?: number | null
  checker?: 'auto' | 'automaton' | 'fuzz'
  crossoverSize?: number
  heatRatio?: number
  incubationLimit?: number
  incubationTimeout?: number | null
  maxAttackStringSize?: number
  maxDegree?: number
  maxGeneStringSize?: number
  maxGenerationSize?: number
  maxInitialGenerationSize?: number
  maxIteration?: number
  maxNFASize?: number
  maxPatternSize?: number
  maxRecallStringSize?: number
  maxRepeatCount?: number
  maxSimpleRepeatCount?: number
  mutationSize?: number
  randomSeed?: number
  recallLimit?: number
  recallTimeout?: number | null
  seeder?: 'static' | 'dynamic'
  seedingLimit?: number
  seedingTimeout?: number | null
  /** @default 10_000 */
  timeout?: number | null
}

export type ReDoSEntry = Linter.RuleSeverity | [Linter.RuleSeverity, NoVulnerableOptions]
export type ReDoSPlugin = ESLint.Plugin & { configs: typeof configs }

const redos: ESLint.Plugin = {
  meta: {
    name: 'eslint-plugin-redos',
    version: '4.5.0',
  },
  rules: rcplugin.rules,
}

const configs = {
  'recommended': rcplugin.configs.recommended,
  'flat/recommended': {
    plugins: { redos },
    rules: {
      'redos/no-vulnerable': 'error',
    } as {
      'redos/no-vulnerable': ReDoSEntry
    },
  },
}

const plugin: ReDoSPlugin = {
  ...redos,
  configs,
}

export default plugin
