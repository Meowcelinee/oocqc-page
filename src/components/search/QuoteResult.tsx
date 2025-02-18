import { Quote } from '@/data/quotes/quotes';
import Link from 'next/link';

export default function QuoteResult(props: Quote) {
    return (
        <Link href={`/view/${props.id}`}>
            <div className='bg-mantle p-2 my-6 drop-shadow-md rounded-r-lg border-l-4 border-l-surface1 transition duration-300 md:hover:bg-base md:hover:border-l-overlay0 md:hover:brightness-105 md:hover:translate-x-3'>
                <h3 className='md:text-xl font-semibold tracking-wide'>
                    "{props.quote}"
                </h3>
                <p className='text-subtext0  italic'>-- {props.person}</p>
            </div>
        </Link>
    );
}
