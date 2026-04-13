import type { ESLintReactSettingsNormalized } from '@eslint-react/shared'
import type { Linter } from 'eslint'
import type { OnlyExportComponentsOptions } from 'eslint-plugin-react-refresh'

import vladpuzBase, { FILES_JS, FILES_TS, type Options } from 'eslint-config-vladpuz'
import react from 'eslint-plugin-react-x'

import { getJsxConfig } from './configs/jsx.ts'
import { getReactConfig } from './configs/react.ts'
import { getReactHooksConfig } from './configs/reactHooks.ts'
import { getReactRefreshConfig } from './configs/reactRefresh.ts'

export interface ReactOptions extends Omit<Options, 'jsx'> {
  react?: ReactSettings
  hooks?: HooksSettings
  refresh?: boolean | RefreshOptions
}

export type ReactSettings = Partial<ESLintReactSettingsNormalized>

export interface HooksSettings {
  additionalEffectHooks?: string
}

export type RefreshOptions = OnlyExportComponentsOptions

function vladpuz(options: ReactOptions = {}): Linter.Config[] {
  const {
    filesJs = FILES_JS,
    filesTs = FILES_TS,
    env = ['builtin', 'node', 'browser'],
    gitignore = true,
    typescript = true,
    stylistic = true,
    react: reactSettings,
    hooks: hooksSettings,
    refresh: enableRefresh = true,
  } = options

  const config = vladpuzBase({
    filesJs,
    filesTs,
    env,
    gitignore,
    typescript,
    stylistic,
    jsx: true,
  })

  const jsxConfig = getJsxConfig()
  config.push(jsxConfig)

  const reactConfig = getReactConfig()
  config.push(reactConfig)

  if (reactSettings) {
    reactConfig.settings = {
      'react-x': reactSettings,
    }
  }

  const disabledTsRules = react.configs['disable-type-checked'].rules ?? {}

  if (typescript === false) {
    reactConfig.rules = {
      ...reactConfig.rules,
      ...disabledTsRules,
    }
  } else {
    const recommendedRules = react.configs['recommended-typescript'].rules ?? {}
    const disabledTsHandledRules: Linter.RulesRecord = {}

    for (const [ruleName, ruleConfig] of Object.entries(recommendedRules)) {
      const ruleSeverity = Array.isArray(ruleConfig)
        ? ruleConfig[0]
        : ruleConfig

      if (ruleSeverity === 'off' || ruleSeverity === 0) {
        disabledTsHandledRules[ruleName] = 'off'
      }
    }

    config.push(
      {
        name: 'vladpuz/react-js',
        files: filesJs,
        rules: disabledTsRules,
      },
      {
        name: 'vladpuz/react-ts',
        files: filesTs,
        rules: disabledTsHandledRules,
      },
    )
  }

  const hooksConfig = getReactHooksConfig()
  config.push(hooksConfig)

  if (hooksSettings) {
    hooksConfig.settings = {
      'react-hooks': hooksSettings,
    }
  }

  if (enableRefresh !== false) {
    const refreshOptions = (typeof enableRefresh === 'object')
      ? enableRefresh
      : {}

    const refreshConfig = getReactRefreshConfig(refreshOptions)
    config.push(refreshConfig)
  }

  return config
}

export default vladpuz
