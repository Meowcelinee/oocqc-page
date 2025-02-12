import validQuotes from '@/data/quotes/quotes';
import QuoteForm from '@/components/search/QuoteForm';
import QuoteResult from '@/components/search/QuoteResult';
import { Quote } from '@/data/quotes/quotes';

interface SearchPageProps {
    searchParams?: Promise<{ quote: string; name: string }>;
}

function EnterSearchTerm() {
    return (
        <div className='mt-2'>
            <h2 className='md:text-3xl text-2xl text-subtext0 font-semibold'>
                Enter a search term to find quotes!
            </h2>
        </div>
    );
}

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
                {/* 
                    TODO:
                    - make EnterSearchTerm a little prettier
                    - maybe display a list of the number of quotes per person?
                */}

                {!quoteFilter && !nameFilter ? (
                    <EnterSearchTerm />
                ) : (
                    <>
                        <h2 className='md:text-4xl text-2xl text-sky font-bold mt-2'>
                            Found {filteredQuotes?.length} result
                            {filteredQuotes?.length !== 1 && 's'}
                            {filteredQuotes?.length !== 0 ? ':' : '.'}
                        </h2>

                        {filteredQuotes?.map((q, key) => {
                            return <QuoteResult key={key} {...q} />;
                        })}
                    </>
                )}
            </div>
        </div>
    );
}
