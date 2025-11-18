const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Fix for plyr SSR issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'plyr': false,
    }
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    return config
  }
}