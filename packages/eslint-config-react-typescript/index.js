module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2021,
    'ecmaFeature': {
      'jsx': true
    }
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'rules': {
    'semi': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-extra-semi': 'error',
    'brace-style': ['error', '1tbs'],
    'quotes': ['error', 'single'],
    'eqeqeq': 'error',
    'no-var': 'error',
    'curly': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'prefer-const': 'error',
    'spaced-comment': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'space-before-blocks': ['error', 'always'],
    'prefer-template': 'error',
    'no-shadow-restricted-names': 'error',
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'max-len': ['warn', { 'code': 100 }],
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never'
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
};
