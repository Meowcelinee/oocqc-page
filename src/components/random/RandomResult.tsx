'use client';

import { Quote } from '@/data/quotes/quotes';
import Link from 'next/link';

export default function RandomResult(props: Quote) {
    return (
        <Link
            href={`/view/${props.id}`}
            className='transition duration-300 hover:brightness-125'
        >
            <div className='bg-gradient-to-r from-surface0 to-base rounded-r-lg border-l-4 border-l-surface2 drop-shadow-lg my-4 p-3'>
                <h2 className='md:text-2xl text-xl text-subtext1 font-semibold'>
                    &quot;{props?.quote}&quot;
                </h2>
                <p className='text-overlay2 md:text-lg italic'>
                    -- {props?.person}
                </p>
            </div>
        </Link>
    );
}
