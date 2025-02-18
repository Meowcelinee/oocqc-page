'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavbarLinks from './NavbarLink';

export default function Header() {
    return (
        <header className='flex md:justify-start justify-between md:gap-0 gap-3 md:px-2 px-1 py-2'>
            <Link href='/'>
                <Image
                    width={130}
                    height={30}
                    src='/images/logos/icon.png'
                    alt=''
                    className='mr-4 transition duration-300 md:hover:brightness-105 md:hover:scale-105'
                    priority
                />
            </Link>
            <div className='flex my-auto md:text-sm text-xs'>
                <NavbarLinks />
            </div>
        </header>
    );
}
