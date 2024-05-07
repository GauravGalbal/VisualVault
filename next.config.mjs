/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'netlifygallerycdn.netlify.app',
                port: '',
                pathname: '/**',
              },
        ],
    },
};

export default nextConfig;
