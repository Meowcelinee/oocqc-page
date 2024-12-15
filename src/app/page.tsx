import validQuotes from '@/data/quotes/quotes';

export default function Home() {
    return (
        <>
            <h1 className='font-semibold text-4xl mb-8'>
                dont worry this is just for testing :^)
            </h1>
            {validQuotes.map((quote, quoteIndex) => {
                return (
                    quote.person.toLowerCase().includes('hivemind') && (
                        <div key={quoteIndex}>
                            <p className='font-bold'>{quoteIndex + 1}:</p>
                            <p className='font-medium' suppressHydrationWarning>
                                quote: {quote.quote}
                            </p>
                            <p className='font-medium'>
                                person: {quote.person.replaceAll('_', ' ')}
                            </p>
                        </div>
                    )
                );
            })}
        </>
    );
}
