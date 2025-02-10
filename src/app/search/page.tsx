import validQuotes from '@/data/quotes/quotes';
import QuoteForm from '@/components/search/QuoteForm';
import QuoteResult from '@/components/search/QuoteResult';
import { Quote } from '@/data/quotes/quotes';
import { Suspense } from 'react';

interface SearchPageProps {
    searchParams?: Promise<{ quote: string; name: string }>;
}

export default async function SearchPage(props: SearchPageProps) {
    const searchParams = await props.searchParams;
    const quoteFilter = searchParams?.quote;
    const nameFilter = searchParams?.name;

    const filteredQuotes: Quote[] = validQuotes
        .filter(q => {
            return quoteFilter
                ? q.quote.toLowerCase().includes(quoteFilter?.toLowerCase())
                : q;
        })
        .filter(q => {
            return nameFilter
                ? q.person.toLowerCase().includes(nameFilter?.toLowerCase())
                : q;
        });

    return (
        <>
            <div className='flex-col md:py-4 py-2'>
                <h1 className='md:my-6 my-4 md:text-4xl text-3xl text-center font-semibold drop-shadow-lg'>
                    Find a quote!
                </h1>
                <div className='flex justify-center gap-3 bg-mantle px-4 py-2 w-full'>
                    <div className='px-2 py-2 md:w-3/4 w-full'>
                        <QuoteForm />
                    </div>
                </div>
                <div className='md:px-12 px-4 w-full'>
                    {/* DO NOT LEAVE THIS IN PROD !!!!! */}
                    <div className='my-8 text-xl font-medium list-disc list-inside'>
                        <p>TODO:</p>
                        <ul>
                            <li>make the quote results prettier</li>
                            <li>
                                fix quotes displaying when theres no queries
                            </li>
                            <li>
                                maybe display a list of the number of quotes per
                                person?
                            </li>
                        </ul>
                    </div>

                    <Suspense
                        key={quoteFilter || nameFilter}
                        fallback={<p>hi this is the fallback</p>}
                    >
                        <h2 className='md:text-4xl text-2xl text-sky font-bold'>
                            Found {filteredQuotes.length} result
                            {filteredQuotes.length !== 1 && 's'}
                            {filteredQuotes.length !== 0 ? ':' : '.'}
                        </h2>

                        {filteredQuotes?.map((q, key) => {
                            return <QuoteResult key={key} {...q} />;
                        })}
                    </Suspense>
                </div>
            </div>
        </>
    );
}
