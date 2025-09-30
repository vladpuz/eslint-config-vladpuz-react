import type { ESLintReactSettingsNormalized } from '@eslint-react/shared'
import type { Linter } from 'eslint'

import vladpuzBase, { FILES_JS, FILES_TS, type Options } from 'eslint-config-vladpuz'

import { getReactConfig, REACT_DISABLED_TS_HANDLED_RULES, REACT_DISABLED_TYPE_CHECKED_RULES } from './configs/react.js'
import { getReactHooksConfig } from './configs/reactHooks.js'
import { getReactRefreshConfig } from './configs/reactRefresh.js'

export interface ReactOptions extends Omit<Options, 'jsx'> {
  react?: ReactSettings
  refresh?: boolean | RefreshOptions
}

export type ReactSettings = Partial<ESLintReactSettingsNormalized>

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
    stylistic = true,
    typescript = true,
    react,
    refresh = true,
  } = options

  const filesJsAndTs = (typescript !== false)
    ? [...filesJs, ...filesTs]
    : filesJs

  const config = vladpuzBase({
    filesJs,
    filesTs,
    env,
    stylistic,
    typescript,
    jsx: true,
  })

  const reactConfig = getReactConfig(filesJsAndTs)
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

  const hooksConfig = getReactHooksConfig(filesJsAndTs)
  config.push(hooksConfig)

  if (refresh !== false) {
    const refreshOptions = (typeof refresh === 'object') ? refresh : {}
    const refreshConfig = getReactRefreshConfig(filesJsAndTs, refreshOptions)
    config.push(refreshConfig)
  }

  return config
}

export default vladpuz
