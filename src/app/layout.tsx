import type { Metadata } from 'next';
import Footer from '@/components/footer';
import '../styles/globals.css';
import { usePathname } from 'next/navigation';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
    title: 'OOCQC Page',
    description: 'Every single noteworthy quote from the OOCQC thread',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className='bg-mantle text-text'>
                <Header />
                <main className='bg-base'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
