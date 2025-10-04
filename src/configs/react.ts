import type { Linter } from 'eslint'

import react from 'eslint-plugin-react-x'

// https://eslint-react.xyz/docs/configuration/configure-project-config#type-information
export const REACT_DISABLED_TYPE_CHECKED_RULES: Linter.RulesRecord = {
  'react-x/no-leaked-conditional-rendering': 'off',
  'react-x/no-unused-props': 'off',
  'react-x/prefer-read-only-props': 'off',
}

// https://github.com/Rel1cx/eslint-react/blob/main/packages/plugins/eslint-plugin-react-x/src/configs/recommended-typescript.ts
export const REACT_DISABLED_TS_HANDLED_RULES: Linter.RulesRecord = {
  'react-x/jsx-no-duplicate-props': 'off',
  'react-x/jsx-no-undef': 'off',
  'react-x/jsx-uses-react': 'off',
  'react-x/jsx-uses-vars': 'off',
}

export function getReactConfig(): Linter.Config {
  return {
    name: 'vladpuz/react',
    plugins: {
      'react-x': react,
    },
    rules: {
      'react-x/jsx-key-before-spread': 'error',
      'react-x/jsx-no-comment-textnodes': 'error',
      'react-x/jsx-no-duplicate-props': 'error',
      'react-x/jsx-no-iife': 'off',
      'react-x/jsx-no-undef': 'error',
      'react-x/jsx-shorthand-boolean': 'error',
      'react-x/jsx-shorthand-fragment': 'error',
      'react-x/jsx-uses-react': 'error',
      'react-x/jsx-uses-vars': 'error',
      'react-x/no-access-state-in-setstate': 'error',
      'react-x/no-array-index-key': 'error',
      'react-x/no-children-count': 'error',
      'react-x/no-children-for-each': 'error',
      'react-x/no-children-map': 'error',
      'react-x/no-children-only': 'error',
      'react-x/no-children-prop': 'error',
      'react-x/no-children-to-array': 'error',
      'react-x/no-class-component': 'off',
      'react-x/no-clone-element': 'error',
      'react-x/no-component-will-mount': 'error',
      'react-x/no-component-will-receive-props': 'error',
      'react-x/no-component-will-update': 'error',
      'react-x/no-context-provider': 'error',
      'react-x/no-create-ref': 'error',
      'react-x/no-default-props': 'error',
      'react-x/no-direct-mutation-state': 'error',
      'react-x/no-duplicate-key': 'error',
      'react-x/no-forbidden-props': 'off',
      'react-x/no-forward-ref': 'error',
      'react-x/no-implicit-key': 'error',
      'react-x/no-leaked-conditional-rendering': 'error',
      'react-x/no-missing-component-display-name': 'error',
      'react-x/no-missing-context-display-name': 'error',
      'react-x/no-missing-key': 'error',
      'react-x/no-misused-capture-owner-stack': 'off',
      'react-x/no-nested-component-definitions': 'off',
      'react-x/no-nested-lazy-component-declarations': 'off',
      'react-x/no-prop-types': 'error',
      'react-x/no-redundant-should-component-update': 'error',
      'react-x/no-set-state-in-component-did-mount': 'error',
      'react-x/no-set-state-in-component-did-update': 'error',
      'react-x/no-set-state-in-component-will-update': 'error',
      'react-x/no-string-refs': 'error',
      'react-x/no-unnecessary-key': 'error',
      'react-x/no-unnecessary-use-callback': 'error',
      'react-x/no-unnecessary-use-memo': 'error',
      'react-x/no-unnecessary-use-prefix': 'error',
      'react-x/no-unsafe-component-will-mount': 'off',
      'react-x/no-unsafe-component-will-receive-props': 'off',
      'react-x/no-unsafe-component-will-update': 'off',
      'react-x/no-unstable-context-value': 'error',
      'react-x/no-unstable-default-props': 'error',
      'react-x/no-unused-class-component-members': 'error',
      'react-x/no-unused-props': 'error',
      'react-x/no-unused-state': 'error',
      'react-x/no-use-context': 'off',
      'react-x/no-useless-forward-ref': 'error',
      'react-x/no-useless-fragment': ['error', { allowExpressions: false }],
      'react-x/prefer-destructuring-assignment': 'off',
      'react-x/prefer-namespace-import': 'off',
      'react-x/prefer-read-only-props': 'off',
      'react-x/prefer-use-state-lazy-initialization': 'error',
    },
  }
}
