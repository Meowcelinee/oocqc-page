import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                appear: {
                    '0%': { transform: 'translate(0px, 12px)', opacity: '0' },
                    '100%': { transform: 'translate(0)', opacity: '1' },
                },
            },
            animation: {
                appear: 'appear 1.2s ease-in-out',
                appearLonger: 'appear 1.6s ease-in-out',
                appearEvenLonger: 'appear 2.2s ease-in-out',
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            defaultFlavour: 'macchiato',
        }),
    ],
} satisfies Config;
