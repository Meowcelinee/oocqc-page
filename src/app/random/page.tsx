'use client';

import RandomResult from '@/components/random/result';
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
                Generate a random quote!
            </h1>
            <div className='flex md:flex-row flex-col bg-mantle md:px-12 px-4 py-2 w-full'>
                <div className='px-2 py-2 md:w-1/3 w-full'>
                    <h2 className='md:text-2xl text-xl text-subtext1 font-medium my-auto'>
                        Pull a random quote from the quote list.
                    </h2>
                    <p className='md:text-xl text-lg text-subtext0 my-auto'>
                        Different quote each time!
                    </p>
                </div>
                <div className='flex flex-col justify-center md:w-1/3'>
                    <button
                        onClick={() => handleNewQuote()}
                        className='bg-sky text-crust text-lg rounded-3xl drop-shadow-lg px-8 py-3 m-auto w-fit h-fit transition duration-300 md:hover:bg-surface0 md:hover:text-text active:brightness-75'
                    >
                        Generate a quote!
                    </button>
                </div>
            </div>
            <div className='bg-gradient-to-br from-mantle via-mantle to-crust md:px-12 px-4 mt-4 w-full'>
                <div className='px-2 py-2 mx-auto md:w-3/4 w-full'>
                    <RandomResult {...quote} />
                </div>
            </div>
        </div>
    );
}
