import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Header from '@/components/header/Header';

import {
    Hind_Vadodara,
    IBM_Plex_Sans,
    JetBrains_Mono,
    Jost,
    Merriweather_Sans,
} from 'next/font/google';

const vadodara = Hind_Vadodara({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const plexSans = IBM_Plex_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jetbrains = JetBrains_Mono({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jost = Jost({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const merriweather = Merriweather_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const fonts = {
    vadodara,
    plexSans,
    jetbrains,
    jost,
    merriweather,
};

export const metadata: Metadata = {
    title: 'OOCQC',
    description: 'Queercraft, out of context.',
    keywords: ['OOCQC', 'Out of Context', 'Queercraft'],
    authors: [{ name: 'Marceline', url: 'https://meowceline.pages.dev/' }],
    creator: 'Marceline Raine',
    openGraph: {
        title: 'Out of Context QC',
        description: 'Out of Context Queercraft',
        url: 'https://oocqc.pages.dev/',
        siteName: 'OOCQC',
        images: [
            {
                url: 'https://oocqc.pages.dev/images/icon.png',
                height: 200,
                width: 200,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // block the site from appearing in search results, at beau's request
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nocache: true,
        noimageindex: true,
        nositelinkssearchbox: true,
        nosnippet: true,
        googleBot: {
            index: false,
            follow: false,
            noarchive: true,
            nocache: true,
            noimageindex: true,
            nositelinkssearchbox: true,
            nosnippet: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`bg-mantle text-text ${fonts.vadodara.className}`}>
                <Header />
                <main className='bg-base'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
