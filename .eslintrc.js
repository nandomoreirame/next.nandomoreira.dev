module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
};
