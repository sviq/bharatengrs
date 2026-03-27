/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  reactStrictMode: true,

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
      };
    }
    return config;
  },
}

module.exports = nextConfig