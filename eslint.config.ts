import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  ...tseslint.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
]
