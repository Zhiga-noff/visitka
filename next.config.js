/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  env: {
    PUBLIC_URL: './src',
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [380, 420, 640, 750, 1080, 1200, 1920, 2048, 3840],
    domains: [
      'mcdn.tvzvezda.ru',
      'tvzvezda.ru',
      'pic.rutube.ru',
      'radiozvezda.ru',
      'cdn000.soundstream.media',
      'encrypted-tbn3.gstatic.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/search',
        destination: '/',
        permanent: true, // Для постоянной переадресации установите значение на true
      },
    ];
  },
};

module.exports = nextConfig;
