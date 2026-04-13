import type { Linter } from 'eslint'

import { testPluginConfig } from 'eslint-config-vladpuz'
import reactHooks from 'eslint-plugin-react-hooks'
import jsx from 'eslint-plugin-react-jsx'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react-x'

import { getJsxConfig } from './configs/jsx.ts'
import { getReactConfig } from './configs/react.ts'
import { getReactHooksConfig } from './configs/reactHooks.ts'
import { getReactRefreshConfig } from './configs/reactRefresh.ts'

const REACT_HOOKS_RULES = new Set(Object.keys(reactHooks.rules))
REACT_HOOKS_RULES.add('no-nested-component-definitions')
REACT_HOOKS_RULES.add('no-nested-lazy-component-declarations')
REACT_HOOKS_RULES.add('component-hook-factories')

// Deprecate eslint-plugin-react-x equivalents of eslint-plugin-react-hooks
for (const [ruleName, ruleConfig] of Object.entries(react.rules ?? {})) {
  if (!ruleConfig.meta) {
    continue
  }

  if (REACT_HOOKS_RULES.has(ruleName)) {
    ruleConfig.meta.deprecated = true
  }
}

testPluginConfig(
  'react-jsx',
  jsx.rules ?? {},
  getJsxConfig(),
  jsx.configs.strict.rules ?? {},
)

testPluginConfig(
  'react-x',
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
