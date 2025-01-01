import globals from 'globals'
import eslintJs from '@eslint/js'
import typescriptEslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react'

export default [
  // JavaScript
  eslintJs.configs.recommended,
  // TypeScript
  ...typescriptEslint.configs.recommended,
  // React
  eslintPluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
]
