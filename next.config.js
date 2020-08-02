//@ts-check
/* eslint @typescript-eslint/no-var-requires: "off" */
const withTM = require('next-transpile-modules')(['@nandomoreira/*']);
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withTM(
  withPWA({
    webpack(config, { isServer, dev, buildId, config: { distDir } }) {
      console.log({ buildId });
      console.log({ isServer });
      console.log({ dev });
      console.log({ distDir });
      return config;
    },
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
  }),
);
