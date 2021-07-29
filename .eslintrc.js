module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'warn',
    '@next/next/no-page-custom-font': 'off',
  },
};
