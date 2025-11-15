import type { Linter } from 'eslint'

import reactHooks from 'eslint-plugin-react-hooks'

export function getReactHooksConfig(): Linter.Config {
  return {
    name: 'vladpuz/react-hooks',
    plugins: {
      // @ts-expect-error: plugin
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/automatic-effect-dependencies': 'off',
      'react-hooks/capitalized-calls': 'off',
      'react-hooks/component-hook-factories': 'error',
      'react-hooks/config': 'error',
      'react-hooks/error-boundaries': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/fbt': 'off',
      'react-hooks/fire': 'off',
      'react-hooks/gating': 'error',
      'react-hooks/globals': 'error',
      'react-hooks/hooks': 'off',
      'react-hooks/immutability': 'error',
      'react-hooks/incompatible-library': 'error',
      'react-hooks/invariant': 'off',
      'react-hooks/memoized-effect-dependencies': 'off',
      'react-hooks/no-deriving-state-in-effects': 'off',
      'react-hooks/preserve-manual-memoization': 'error',
      'react-hooks/purity': 'error',
      'react-hooks/refs': 'error',
      'react-hooks/rule-suppression': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/set-state-in-effect': 'error',
      'react-hooks/set-state-in-render': 'error',
      'react-hooks/static-components': 'error',
      'react-hooks/syntax': 'off',
      'react-hooks/todo': 'off',
      'react-hooks/unsupported-syntax': 'error',
      'react-hooks/use-memo': 'error',
      'react-hooks/void-use-memo': 'off',
    },
  }
}
