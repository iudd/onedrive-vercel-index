const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Completely disable plyr on server side
    if (isServer) {
      config.externals = [...(config.externals || []), 'plyr', 'plyr-react']
      
      // Also ignore plyr modules during server-side compilation
      config.resolve.alias = {
        ...config.resolve.alias,
        'plyr': false,
        'plyr-react': false,
      }
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