import type { Linter } from 'eslint'

import jsx from 'eslint-plugin-react-jsx'

export function getJsxConfig(): Linter.Config {
  return {
    name: 'vladpuz/jsx',
    plugins: {
      'react-jsx': jsx,
    },
    rules: {
      'react-jsx/no-children-prop': 'error',
      'react-jsx/no-children-prop-with-children': 'error',
      'react-jsx/no-comment-textnodes': 'error',
      'react-jsx/no-key-after-spread': 'error',
      'react-jsx/no-leaked-dollar': 'error',
      'react-jsx/no-leaked-semicolon': 'error',
      'react-jsx/no-namespace': 'error',
      'react-jsx/no-useless-fragment': 'error',
    },
  }
}
