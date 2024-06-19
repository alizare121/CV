/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
