'use client';

import validQuotes from '@/data/quotes/quotes';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
}

export default function NotFound({ error }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='bg-crust md:py-20 py-28'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:w-2/5 w-2/3 justify-center'>
                    <div className='block mx-auto my-4 align-middle text-center '>
                        <h1 className='md:text-6xl text-5xl'>{'>_<'}</h1>
                    </div>

                    <hr className='md:my-8 my-12 border-surface2' />

                    <div className='my-3 mx-auto font-semibold'>
                        <h2 className='md:text-3xl text-2xl text-center'>
                            Something went wrong.
                        </h2>
                        <p className='text-overlay2 md:text-lg mt-4 md:text-center'>
                            You&apos;re probably looking for a quote that
                            doesn&apos;t exist.
                        </p>
                        <p className='text-overlay1 mt-1 md:text-center'>
                            (hint: there are only {validQuotes.length} quotes.)
                        </p>
                    </div>

                    <div className='mx-auto md:max-w-screen-md'>
                        <p className='text-overlay0 mt-4 italic'>
                            If you believe this shouldn&apos;t be an error,
                            contact Marceline immediately.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
