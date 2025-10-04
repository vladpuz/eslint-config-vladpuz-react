import { testPluginConfig } from 'eslint-config-vladpuz'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react-x'

import { getReactConfig } from './configs/react.ts'
import { getReactHooksConfig } from './configs/reactHooks.ts'
import { getReactRefreshConfig } from './configs/reactRefresh.ts'

testPluginConfig(
  'react-x',
  react.rules,
  getReactConfig(),
)

testPluginConfig(
  'react-hooks',
  reactHooks.rules ?? {},
  getReactHooksConfig(),
)

testPluginConfig(
  'react-refresh',
  reactRefresh.rules,
  getReactRefreshConfig({}),
)
