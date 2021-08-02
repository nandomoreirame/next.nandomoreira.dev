const { AUTHOR, BASE_URL, SEO, WEBSITE } = require('./site.config');

const env = { BASE_URL, AUTHOR, SEO, WEBSITE };

// eslint-disable-next-line no-console
console.info(env);

const nextConfig = {
  webpack5: true,
  trailingSlash: true,
  reactStrictMode: true,
  env,
};

module.exports = nextConfig;
