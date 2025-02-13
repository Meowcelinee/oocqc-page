import { Quote } from '@/data/quotes/quotes';

export default function RandomResult(props: Quote) {
    return (
        <div className='bg-gradient-to-r from-surface0 to-base rounded-r-lg border-l-4 border-l-surface2 drop-shadow-lg my-4 p-3'>
            <h2 className='md:text-2xl text-xl text-subtext1 font-semibold'>
                "{props?.quote}"
            </h2>
            <p className='text-overlay2 md:text-lg italic'>
                -- {props?.person}
            </p>
        </div>
    );
}
