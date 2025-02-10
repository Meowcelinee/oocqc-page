import { Quote } from '@/data/quotes/quotes';

export default function QuoteResult(quote: Quote) {
    return (
        <div className='bg-mantle to-crust p-2 my-2'>
            <h3 className='md:text-xl font-semibold tracking-wide'>
                "{quote.quote}"
            </h3>
            <p className='text-subtext0 md:text-md italic'>-- {quote.person}</p>
        </div>
    );
}
