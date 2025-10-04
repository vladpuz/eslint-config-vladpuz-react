import type { ESLintReactSettingsNormalized } from '@eslint-react/shared'
import type { Linter } from 'eslint'

import vladpuzBase, { FILES_JS, FILES_TS, type Options } from 'eslint-config-vladpuz'

import { getReactConfig, REACT_DISABLED_TS_HANDLED_RULES, REACT_DISABLED_TYPE_CHECKED_RULES } from './configs/react.js'
import { getReactHooksConfig } from './configs/reactHooks.js'
import { getReactRefreshConfig } from './configs/reactRefresh.js'

export interface ReactOptions extends Omit<Options, 'jsx'> {
  react?: ReactSettings
  hooks?: HooksSettings
  refresh?: boolean | RefreshOptions
}

export type ReactSettings = Partial<ESLintReactSettingsNormalized>

export interface HooksSettings {
  additionalEffectHooks?: string
}

export interface RefreshOptions {
  allowExportNames?: string[]
  allowConstantExport?: boolean
  customHOCs?: string[]
  checkJS?: boolean
}

function vladpuz(options: ReactOptions = {}): Linter.Config[] {
  const {
    filesJs = FILES_JS,
    filesTs = FILES_TS,
    env = ['node', 'browser'],
    gitignore = true,
    typescript = true,
    stylistic = true,
    react,
    hooks,
    refresh = true,
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

  const reactConfig = getReactConfig()
  config.push(reactConfig)

  if (react != null) {
    reactConfig.settings = {
      'react-x': react,
    }
  }

  if (typescript === false) {
    reactConfig.rules = {
      ...reactConfig.rules,
      ...REACT_DISABLED_TYPE_CHECKED_RULES,
    }
  } else {
    config.push({
      name: 'vladpuz/react-js',
      files: filesJs,
      rules: REACT_DISABLED_TYPE_CHECKED_RULES,
    })

    config.push({
      name: 'vladpuz/react-ts',
      files: filesTs,
      rules: REACT_DISABLED_TS_HANDLED_RULES,
    })
  }

  const hooksConfig = getReactHooksConfig()
  config.push(hooksConfig)

  if (hooks != null) {
    hooksConfig.settings = {
      'react-hooks': hooks,
    }
  }

  if (refresh !== false) {
    const refreshOptions = (typeof refresh === 'object') ? refresh : {}
    const refreshConfig = getReactRefreshConfig(refreshOptions)
    config.push(refreshConfig)
  }

  return config
}

export default vladpuz
