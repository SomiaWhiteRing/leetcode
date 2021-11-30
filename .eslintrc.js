module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-irregular-whitespace': 'off'
  }
}
