/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  
  // Optimize Fast Refresh
  reactStrictMode: true,
  
  // Reduce rebuilds
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Optimize Fast Refresh for better performance
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
      };
    }
    return config;
  },
}

module.exports = nextConfig

