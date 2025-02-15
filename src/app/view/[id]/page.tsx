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
        <div className='flex-col md:py-4 py-2'>
            <div className='mx-auto md:w-fit w-full'>
                <h1 className='animate-appear my-4 md:text-4xl text-3xl font-semibold drop-shadow-lg'>
                    "{quote.quote}"
                </h1>
                <p className='animate-appearLonger text-overlay2 italic'>
                    --{quote.person}
                </p>
            </div>
            <div className='bg-mantle mt-4 px-2 py-1 w-full'>
                <Link
                    href='/search'
                    className='flex bg-surface0 rounded-2xl border-2 border-transparent mx-auto px-4 py-2 transition duration-300 w-fit md:hover:border-overlay2'
                >
                    <div className='flex gap-2'>
                        <i className='nf nf-fa-arrow_left text-sm my-auto'></i>
                        Return to search
                    </div>
                </Link>
            </div>
        </div>
    );
}
