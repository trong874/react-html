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
      {
        protocol: 'https',
        hostname: 'backend.dev.tichhop.pro',
      },
      {
        protocol: 'https',
        hostname: 'qltt.truongdang.online',
      },
    ],
  },
  compiler: {
    styledComponents: true
  }
}
module.exports = nextConfig