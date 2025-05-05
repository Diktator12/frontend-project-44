import js from '@eslint/js'
import globals from 'globals'
import airbnbBase from './node_modules/eslint-config-airbnb-base/rules/best-practices.js'
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
      'brace-style': ['error', '1tbs'],
      'arrow-parens': ['error', 'as-needed'],
    },
  },
]
