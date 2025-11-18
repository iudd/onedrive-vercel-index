const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Completely disable plyr on server side
    if (isServer) {
      config.externals = [...(config.externals || []), 'plyr', 'plyr-react']
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