import type { Linter } from 'eslint'

import reactRefresh from 'eslint-plugin-react-refresh'

import type { RefreshOptions } from '../vladpuz.js'

export function getReactRefreshConfig(
  options: RefreshOptions,
): Linter.Config {
  return {
    name: 'vladpuz/react-refresh',
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['error', options],
    },
  }
}
