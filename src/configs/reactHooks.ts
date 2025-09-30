import type { Linter } from 'eslint'

import reactHooks from 'eslint-plugin-react-hooks'

export function getReactHooksConfig(files: string[]): Linter.Config {
  return {
    name: 'vladpuz/react-hooks',
    files,
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  }
}
