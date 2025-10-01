import redos from '@quitsmx/eslint-plugin-redos'
import assert from 'node:assert/strict'
import { test } from 'node:test'

test('redos has configs', () => {
  assert.ok(typeof redos.configs === 'object')
})

test('redos has a legacy config', () => {
  assert.ok(typeof redos.configs.recommended === 'object')
  assert.ok(typeof redos.configs.recommended.rules === 'object')
})

test('redos has a flat config', () => {
  assert.ok(typeof redos.configs['flat/recommended'] === 'object')
  assert.ok(typeof redos.configs['flat/recommended'].rules === 'object')
  assert.ok(typeof redos.configs['flat/recommended'].plugins === 'object')
})
