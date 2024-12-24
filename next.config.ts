import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mc-heads.net',
                port: '',
                pathname: '/avatar/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
