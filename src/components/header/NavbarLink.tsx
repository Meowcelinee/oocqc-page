'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navbarLinks from '@/data/navbarLinks';
import classNames from 'classnames';

export default function NavbarLinks() {
    const pathname = usePathname();

    return navbarLinks.map(link => {
        return (
            <Link
                key={link.link}
                href={link.link}
                className={classNames(
                    'flex mx-4 transition duration-200 border-b-2',
                    {
                        'text-subtext0 border-b-transparent hover:text-text hover:border-b-pink':
                            !pathname.includes(link.link),
                        'text-text border-b-pink': pathname.includes(link.link),
                    }
                )}
            >
                <i className={link.iconClassName}></i>
                <p className='text-lg ml-1'>{link.title}</p>
            </Link>
        );
    });
}
