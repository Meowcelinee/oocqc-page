'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavbarLinks from './NavbarLink';

export default function Header() {
    return (
        <header className='flex justify-start md:gap-0 gap-3 md:px-2 px-1 py-2'>
            <Link href='/'>
                <Image
                    width={176}
                    height={43}
                    src='/images/logos/icon.png'
                    alt=''
                    className='mr-4 transition duration-200 hover:brightness-75 hover:opacity-90'
                    priority
                />
            </Link>
            <div className='flex my-auto'>
                <NavbarLinks />
            </div>
        </header>
    );
}
