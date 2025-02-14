'use client';

import Form from 'next/form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function QuoteForm() {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // commented so my own dumb ass doesnt forget how this works

    // update url with search parameters --- used for quote *and* name queries
    const handleSearch = (query: string, value: string): void => {
        const params = new URLSearchParams(searchParams);

        // if value doesnt exist, remove the *whole query* from the url
        value ? params.set(query, value) : params.delete(query);

        // update url
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Form action='/search' className='flex flex-col justify-center w-full'>
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='block mx-auto md:w-1/2 w-11/12'>
                    <h3 className='md:text-xl text-lg text-overlay0 font-medium'>
                        Search for a quote:
                    </h3>
                    <input
                        name='quote'
                        className='bg-surface0 rounded-md border-surface1 border-2 drop-shadow-lg text-lg py-2 px-2 mx-auto w-full transition duration-300 focus:outline-none focus:border-sky focus:bg-base'
                        placeholder='Keywords'
                        onChange={e => handleSearch('quote', e.target.value)}
                        defaultValue={searchParams.get('quote')?.toString()}
                        autoComplete='off'
                    />
                </div>
                <div className='block mx-auto md:w-1/2 w-11/12'>
                    <h3 className='md:text-xl text-lg text-overlay0 font-medium'>
                        Search for a quoted person:
                    </h3>
                    <input
                        name='author'
                        className='bg-surface0 rounded-md border-surface1 border-2 drop-shadow-lg text-lg py-2 px-2 mx-auto w-full transition duration-300 focus:outline-none focus:border-pink focus:bg-base'
                        placeholder='Name'
                        onChange={e => handleSearch('name', e.target.value)}
                        defaultValue={searchParams.get('name')?.toString()}
                        autoComplete='off'
                    />
                </div>
            </div>
        </Form>
    );
}
