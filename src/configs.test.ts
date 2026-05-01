import type { Linter } from 'eslint'

import react from '@eslint-react/eslint-plugin'
import { testPluginConfig } from 'eslint-config-vladpuz'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

import { getReactConfig } from './configs/react.ts'
import { getReactHooksConfig } from './configs/reactHooks.ts'
import { getReactRefreshConfig } from './configs/reactRefresh.ts'

const REACT_HOOKS_RULES = new Set(Object.keys(reactHooks.rules))
REACT_HOOKS_RULES.add('no-nested-component-definitions')
REACT_HOOKS_RULES.add('no-nested-lazy-component-declarations')

const reactRules = react.rules ?? {}

// Deprecate @eslint-react equivalents of eslint-plugin-react-hooks and delete aliases with "x-" prefix
for (const [ruleName, ruleConfig] of Object.entries(reactRules)) {
  if (!ruleConfig.meta) {
    continue
  }

  if (REACT_HOOKS_RULES.has(ruleName)) {
    ruleConfig.meta.deprecated = true
  }

  if (ruleName.startsWith('x-')) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete reactRules[ruleName]
  }
}

testPluginConfig(
  '@eslint-react',
  react.rules ?? {},
  getReactConfig(),
  [
    ...Object.entries(react.configs['recommended-type-checked'].rules ?? {}),
    ...Object.entries(react.configs.recommended.rules ?? {}),
    // eslint-disable-next-line unicorn/no-array-reduce
  ].reduce<Linter.RulesRecord>((acc, [ruleName, ruleConfig]) => {
    if (ruleConfig === undefined) {
      return acc
    }

    const ruleNameOnly = ruleName.split('/').slice(1).join('/')

    if (REACT_HOOKS_RULES.has(ruleNameOnly)) {
      return acc
    }

    return { ...acc, [ruleName]: ruleConfig }
  }, {}),
)

testPluginConfig(
  'react-hooks',
  reactHooks.rules,
  getReactHooksConfig(),
  reactHooks.configs.recommended.rules,
)

testPluginConfig(
  'react-refresh',
  reactRefresh.rules,
  getReactRefreshConfig({}),
  reactRefresh.configs.recommended.rules,
)
