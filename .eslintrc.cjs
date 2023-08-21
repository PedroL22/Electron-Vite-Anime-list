module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
    'prettier',
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
