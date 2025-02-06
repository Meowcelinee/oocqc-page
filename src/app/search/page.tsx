import QuoteForm from './QuoteForm';

export default function SearchPage() {
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
            </div>
        </>
    );
}
