const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity's CDN
      },
    ],
  },
};

export default nextConfig;


