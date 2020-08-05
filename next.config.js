//@ts-check
/* eslint @typescript-eslint/no-var-requires: "off" */
const withPlugins = require('next-compose-plugins');
const nextOptimizedImages = require('next-optimized-images');
const nextTranspileModules = require('next-transpile-modules')(['@nandomoreira/*']);
const nextPWA = require('next-pwa');

const { title, subtitle, description, homepage } = require('./package.json');

const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_URL: process.env.BASE_URL || homepage,
    SEO: { title, subtitle, description, homepage },
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
};

module.exports = withPlugins([nextTranspileModules, nextPWA, nextOptimizedImages], nextConfig);
