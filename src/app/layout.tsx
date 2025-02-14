import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Header from '@/components/header/Header';

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
                url: 'http://localhost:3000/favicon.ico',
                height: 300,
                width: 300,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className='bg-mantle text-text'>
                <Header />
                <main className='bg-base'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
