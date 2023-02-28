/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/.well-known/nostr.json',
        destination: '/api/nostr',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
