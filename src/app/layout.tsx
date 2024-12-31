import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
    title: 'OOCQC',
    description: 'Every single noteworthy quote from the OOCQC thread',
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
