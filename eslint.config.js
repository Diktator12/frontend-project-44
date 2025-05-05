import js from '@eslint/js'
import globals from 'globals'
import airbnbBase from 'eslint-config-airbnb-base'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...airbnbBase.rules,
      semi: ['error', 'never'],
    },
  },
]
