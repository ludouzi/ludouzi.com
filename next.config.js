/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/fooyin',
        destination: 'https://github.com/ludouzi/fooyin',
        permanent: false,
      },
      {
        source: '/mandaloci',
        destination: 'https://github.com/ludouzi/mandaloci',
        permanent: false,
      },
    ]
  },
}
