const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdns.diongame.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.upanh.info',
      },
    ],  },
}
module.exports = nextConfig