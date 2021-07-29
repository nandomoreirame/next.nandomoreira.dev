const { title, subtitle, description, homepage } = require('./package.json');

const nextConfig = {
  webpack5: true,
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_URL: process.env.BASE_URL || homepage,
    SEO: { title, subtitle, description, homepage },
  },
};

module.exports = nextConfig;
