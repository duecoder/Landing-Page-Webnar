module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'standard',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    plugins: 'jsx',
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jsx'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'react/forbid-prop-types': 0,
    'jest/require-hook': 'off',
    'no-unused-vars': 0,
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
