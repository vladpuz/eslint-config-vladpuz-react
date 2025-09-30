import type { Linter } from 'eslint'

import reactRefresh from 'eslint-plugin-react-refresh'

import type { RefreshOptions } from '../vladpuz.js'

export function getReactRefreshConfig(
  files: string[],
  options: RefreshOptions,
): Linter.Config {
  return {
    name: 'vladpuz/react-refresh',
    files,
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['error', options],
    },
  }
}
