import { Quote } from '@/data/quotes/quotes';
import validQuotes from '@/data/quotes/quotes';
import Link from 'next/link';

export default async function ViewQuote({
    params,
}: {
    params: Promise<Quote>;
}) {
    const quote = validQuotes[(await params).id - 1];
    return (
        <div className='md:py-4 py-2'>
            <div className='bg-gradient-to-r from-mantle to-crust drop-shadow-md rounded-sm mx-auto md:px-10 md:py-6 px-5 py-3 w-full'>
                <div className='mx-auto md:w-fit md:max-w-screen-xl w-full'>
                    <h1 className='animate-appearShorter my-4 md:text-4xl text-3xl text-rosewater font-semibold drop-shadow-lg tracking-normal md:tracking-wide md:leading-normal leading-normal'>
                        &quot;{quote.quote}&quot;
                    </h1>
                    <p className='animate-appear text-overlay2 italic'>
                        --{quote.person}
                    </p>
                </div>
            </div>
            <div className='w-fit mt-4 mx-auto'>
                <Link
                    href='/search'
                    className='flex bg-sky text-crust rounded-2xl drop-shadow-md px-4 py-1 transition duration-300 w-fit md:hover:bg-mantle md:hover:text-text'
                >
                    <div className='flex gap-2 m-auto text-center'>
                        <i className='nf nf-fa-arrow_left text-sm my-auto'></i>
                        Return to search
                    </div>
                </Link>
            </div>
            <div className='flex md:flex-row flex-col justify-center gap-4 bg-mantle drop-shadow-sm mt-4 px-2 py-2 w-full'>
                {quote.id > 1 && (
                    <Link
                        href={`/view/${quote.id - 1}`}
                        className='flex bg-surface0 rounded-2xl border-2 border-transparent drop-shadow-lg px-4 py-2 md:m-0 mx-auto transition duration-300 md:w-fit w-2/3 md:hover:bg-base md:hover:border-overlay2'
                    >
                        <div className='flex gap-2 m-auto text-center'>
                            <i className='nf nf-fa-arrow_left text-sm my-auto'></i>
                            Previous quote
                        </div>
                    </Link>
                )}
                <Link
                    href={`/view/${quote.id + 1}`}
                    className='flex bg-surface0 rounded-2xl border-2 border-transparent drop-shadow-lg px-4 py-2 md:m-0 mx-auto transition duration-300 md:w-fit w-2/3 md:hover:bg-base md:hover:border-overlay2'
                >
                    <div className='flex gap-2 m-auto text-center'>
                        Next quote
                        <i className='nf nf-fa-arrow_right text-sm my-auto'></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}
