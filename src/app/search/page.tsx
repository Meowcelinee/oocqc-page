import validQuotes from '@/data/quotes/quotes';
import QuoteForm from '@/components/search/QuoteForm';
import QuoteResult from '@/components/search/QuoteResult';
import { Quote } from '@/data/quotes/quotes';
import ScrollToTop from '@/components/search/ScrollToTop';

interface SearchPageProps {
    searchParams?: Promise<{ quote: string; name: string }>;
}

function EnterSearchTerm() {
    return (
        <div className='mt-2'>
            <h2 className='md:text-2xl text-xl text-overlay1 font-semibold'>
                Search results will appear here
            </h2>
        </div>
    );
}

/*
 *  TODO:
 *   - display a list of the people being quoted, with the number of times theyre quoted
 *   - (do this when you have a better understanding of array methods)
 */

export default async function SearchPage(props: SearchPageProps) {
    const searchParams = await props.searchParams;
    const quoteFilter = searchParams?.quote;
    const nameFilter = searchParams?.name;

    const handleFilter = (quotes: Quote[]): Quote[] | void => {
        if (!quoteFilter && !nameFilter) return;
        return quotes
            .filter(q =>
                quoteFilter
                    ? q.quote.toLowerCase().includes(quoteFilter?.toLowerCase())
                    : q
            )
            .filter(q =>
                nameFilter
                    ? q.person.toLowerCase().includes(nameFilter?.toLowerCase())
                    : q
            );
    };

    const filteredQuotes = handleFilter(validQuotes);

    return (
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
                {!quoteFilter && !nameFilter ? (
                    <EnterSearchTerm />
                ) : (
                    <>
                        <h2 className='md:text-4xl text-2xl text-sky font-bold mt-2'>
                            Found {filteredQuotes?.length} result
                            {filteredQuotes?.length !== 1 && 's'}
                            {filteredQuotes?.length !== 0 ? ':' : '.'}
                        </h2>

                        {filteredQuotes?.map(q => {
                            return <QuoteResult key={q.id} {...q} />;
                        })}
                    </>
                )}
            </div>
            <div className='flex justify-center'>
                <ScrollToTop length={filteredQuotes?.length} />
            </div>
        </div>
    );
}
