import type { Linter } from 'eslint'

import react from 'eslint-plugin-react-x'

export function getReactConfig(): Linter.Config {
  return {
    name: 'vladpuz/react',
    plugins: {
      'react-x': react,
    },
    rules: {
      'react-x/no-access-state-in-setstate': 'error',
      'react-x/no-array-index-key': 'error',
      'react-x/no-children-count': 'error',
      'react-x/no-children-for-each': 'error',
      'react-x/no-children-map': 'error',
      'react-x/no-children-only': 'error',
      'react-x/no-children-to-array': 'error',
      'react-x/no-class-component': 'off',
      'react-x/no-clone-element': 'error',
      'react-x/no-component-will-mount': 'error',
      'react-x/no-component-will-receive-props': 'error',
      'react-x/no-component-will-update': 'error',
      'react-x/no-context-provider': 'error',
      'react-x/no-create-ref': 'error',
      'react-x/no-direct-mutation-state': 'error',
      'react-x/no-duplicate-key': 'error',
      'react-x/no-forward-ref': 'error',
      'react-x/no-implicit-children': 'error',
      'react-x/no-implicit-key': 'error',
      'react-x/no-implicit-ref': 'error',
      'react-x/no-leaked-conditional-rendering': 'error',
      'react-x/no-missing-component-display-name': 'error',
      'react-x/no-missing-context-display-name': 'error',
      'react-x/no-missing-key': 'error',
      'react-x/no-misused-capture-owner-stack': 'off',
      'react-x/no-set-state-in-component-did-mount': 'error',
      'react-x/no-set-state-in-component-did-update': 'error',
      'react-x/no-set-state-in-component-will-update': 'error',
      'react-x/no-unnecessary-use-prefix': 'error',
      'react-x/no-unsafe-component-will-mount': 'error',
      'react-x/no-unsafe-component-will-receive-props': 'error',
      'react-x/no-unsafe-component-will-update': 'error',
      'react-x/no-unstable-context-value': 'error',
      'react-x/no-unstable-default-props': 'error',
      'react-x/no-unused-class-component-members': 'error',
      'react-x/no-unused-props': 'error',
      'react-x/no-use-context': 'error',
      'react-x/use-state': 'error',
    },
  }
}
