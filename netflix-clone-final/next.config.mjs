/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol:'https',
            hostname:'ih1.redbubble.net'
          },
          {
            protocol:'https',
            hostname:'image.tmdb.org'
          }
        ],
      },
};

export default nextConfig;
