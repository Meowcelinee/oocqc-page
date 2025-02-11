import { Quote } from '@/data/quotes/quotes';

export default function QuoteResult(props: Quote) {
    return (
        <div className='bg-mantle to-crust p-2 my-3 drop-shadow-md rounded-r-lg border-l-4 border-l-surface1 transition duration-300 hover:bg-base hover:border-l-overlay0 hover:brightness-105'>
            <h3 className='md:text-xl font-semibold tracking-wide'>
                "{props.quote}"
            </h3>
            <p className='text-subtext0 md:text-md italic'>-- {props.person}</p>
        </div>
    );
}
