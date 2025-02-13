'use client';

import { Quote } from '@/data/quotes/quotes';
import randomQuote from '@/lib/randomQuote';
import { useState } from 'react';

export default function RandomQuote() {
    const [quote, setQuote] = useState<Quote>(randomQuote());
    const handleNewQuote = () => {
        const q = randomQuote();
        setQuote(q);
    };

    return (
        <div className='flex-col md:py-4 py-2'>
            <h1 className='md:my-6 my-4 md:text-4xl text-3xl text-center font-semibold drop-shadow-lg'>
                Find a random quote!
            </h1>
            <div className='flex flex-col justify-center gap-3 bg-mantle md:px-12 px-4 py-2 w-full'>
                <div className='px-2 py-2 mx-auto md:w-3/4 w-full'>
                    <h2 className='md:text-2xl text-xl text-subtext1 font-medium'>
                        Pull a random quote from the quote database.
                    </h2>
                    <p className='text-subtext0'>Different quote each time!</p>
                </div>
                <button
                    onClick={() => handleNewQuote()}
                    className='bg-sky text-crust text-lg rounded-3xl drop-shadow-lg px-6 py-2 mx-auto w-fit transition duration-300 md:hover:bg-surface0 md:hover:text-text active:brightness-75'
                >
                    Generate a quote!
                </button>
            </div>
            <div className='bg-gradient-to-br from-mantle via-mantle to-crust md:px-12 px-4 mt-3 w-full'>
                <div className='px-2 py-2 mx-auto md:w-3/4 w-full'>
                    <div className='bg-gradient-to-r from-surface0 to-base rounded-lg drop-shadow-lg my-4 p-3'>
                        <h2 className='md:text-3xl text-xl text-subtext1 font-semibold'>
                            "{quote?.quote}"
                        </h2>
                        <p className='text-overlay2 md:text-lg italic'>
                            -- {quote?.person}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
