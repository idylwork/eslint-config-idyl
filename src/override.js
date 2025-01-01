export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // ファイル末尾の改行を強制
    'eol-last': ['error'],
    // 連続した改行を禁止
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // インデントは2スペース
    indent: ['error', 2],
    // クォートはシングルクォート
    quotes: ['error', 'single'],
    // セミコロン省略
    semi: ['error', 'never'],
    // 未使用の変数はエラーだが、`_`から始まる変数は除外
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^_',
      'destructuredArrayIgnorePattern': '^_'
    }],
    // 厳密な等価演算子を強制
    eqeqeq: ['error', 'always'],
    // console.log の使用を警告
    'no-console': ['warn', { allow: ['info', 'error'] }],
    // コンマは行末に強制
    'comma-style': ['error', 'last'],

    // 行末のスペースを禁止
    'no-trailing-spaces': ['error'],
    // コンマ後のスペースを強制
    'comma-spacing': ['error'],
    // キーの後のスペースを強制
    'key-spacing': ['error'],
    // キーワードの後のスペースを強制
    'keyword-spacing': ['error'],
    // ブロックの前のスペースを強制
    'space-before-blocks': ['error'],
    // Switch文のコロンの前後のスペースを禁止
    'switch-colon-spacing': ['error'],
    // オブジェクトのキーの前後のスペースを強制
    'computed-property-spacing': ['error'],
    // オブジェクトがワンラインのときの内側のスペースを強制
    'object-curly-spacing': ['error', 'always'],
    // ワンラインブロックの前後のスペースを強制
    'block-spacing': ['error'],
    // 括弧内のスペースを禁止
    'space-in-parens': ['error'],
    // 演算子の前後にスペースを強制
    'space-infix-ops': ['error'],
    // 関数と引数の間はスペースを禁止
    'no-spaced-func': ['error'],
    // コメントのスペース
    'spaced-comment': ['error', 'always'],

    // ブレースの改行はブロック開始後
    'brace-style': ['error'],

    // キャメルケースを強制
    camelcase: ['warn', { properties: 'always' }],
    // 一貫した return を強制
    'consistent-return': ['error'],
    // var の使用を禁止
    'no-var': ['error'],
    // 再代入がない場合は const を推奨
    'prefer-const': ['error'],
    // 関数の複雑さを制限
    complexity: ['warn', { max: 10 }],
    // ブロック内の単体の if を禁止
    'no-lonely-if': ['error'],
    // 三項演算子を可能な限り単純に記載する
    'no-unneeded-ternary': ['error'],
    // 三項演算子のネストを禁止
    'no-nested-ternary': ['error'],
    // モジュールの未解決を禁止
    // "import/no-unresolved": ["error"],
    // JSDoc を強制
    // 'require-jsdoc': ['warn'],
    // JSX の属性はダブルクオート
    'jsx-quotes': ['error', 'prefer-double'],
    // JSX ファイルでも React のインポートは不要 (eslint-plugin-react があるため)
    'react/jsx-uses-react': 'off',
    // JSX ファイルでも React のインポートは不要 (eslint-plugin-react があるため)
    'react/react-in-jsx-scope': 'off',
  },
}
