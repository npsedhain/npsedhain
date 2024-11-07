/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://www.codingfreshman.com/resume.pdf',
        permanent: false,
      },
      {
        source: '/blog',
        destination: 'https://www.codingfreshman.com/articles',
        permanent: false,
      },
      {
        source: '/',
        destination: 'https://www.codingfreshman.com',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/rss",
        destination: "/feed/rss.xml",
      },
      {
        source: "/feed",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
      {
        source: "/json",
        destination: "/feed/feed.json",
      },
    ];
  },
};

module.exports = nextConfig;
