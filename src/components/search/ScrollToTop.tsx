'use client';

type ScrollButtonProps = { length: number | undefined };

export default function ScrollToTop(quoteArray: ScrollButtonProps) {
    const handleScroll = () =>
        typeof window === 'undefined'
            ? undefined
            : window.scrollTo({ top: 0, behavior: 'smooth' });

    // do not render if the quote count is less than 10 (early return)
    if (!quoteArray.length || quoteArray.length < 10) return;

    return (
        <button
            className='bg-surface0 text-subtext1 px-5 py-2 rounded-xl transition duration-300 hover:bg-sky hover:text-crust active:brightness-50'
            onClick={() => handleScroll()}
        >
            Return to top <i className='nf nf-fa-circle_arrow_up'></i>
        </button>
    );
}
