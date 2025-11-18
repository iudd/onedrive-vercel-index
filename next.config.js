const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Completely exclude plyr from server-side bundle
    if (isServer) {
      config.externals = [...(config.externals || []), 'plyr']
    }
    
    return config
  },
  transpilePackages: ['plyr-react']
}