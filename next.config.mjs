/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
            },
        ],
    },
};

export default nextConfig;
