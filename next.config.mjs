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
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
            },
        };
        return config;
    },
};

export default nextConfig;
