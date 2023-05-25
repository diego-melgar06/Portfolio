module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  extends: ['plugin:react/recommended', 'standard', 'prettier'],

  overrides: [],

  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['react'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': ['error', 'never']
  }
};
