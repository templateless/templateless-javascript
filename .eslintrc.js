module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    complexity: 'off',
    'sort-keys': 'off',
    'no-tabs': 'error',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'node/no-unsupported-features/es-builtins': 'off',
    'unicorn/prefer-spread': 'off',
  },
  ignorePatterns: ['*.mjs', '*.cjs'],
}
