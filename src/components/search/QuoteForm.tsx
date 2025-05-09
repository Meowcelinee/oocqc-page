'use client';

import Form from 'next/form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function RemovalRequest() {
    return (
        <div className='w-full text-center pt-3 pb-1'>
            <p className='text-overlay2 opacity-80'>
                If you&apos;d like to have your quotes removed from this site
                and/or the resource pack, message{' '}
                <span className='italic'>@meowcelinee.</span> on Discord.
            </p>
        </div>
    );
}

export default function QuoteForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    /*
     *  update url with search parameters --- used for quote *and* name queries.
     *  useDebounced creates delay between keystroke and search
     */
    const handleSearch = useDebouncedCallback(
        (query: string, value: string) => {
            // new object for modifying the current search params (from useSearchParams())
            const params = new URLSearchParams(searchParams);

            // remove whitespace from search value, if value exists
            value = value.trim() ?? undefined;

            // if value doesnt exist, remove the *whole query* from the url
            value ? params.set(query, value) : params.delete(query);

            // update url
            router.replace(`${pathname}?${params.toString()}`);
        },
        200 // 200ms delay
    );

    const handleSort = (val: string) => {
        const param = new URLSearchParams(searchParams);

        val === 'newest' ? param.set('sort', 'newest') : param.delete('sort');

        router.replace(`${pathname}?${param.toString()}`);
    };

    return (
        <Form
            action='/search'
            className='flex flex-col justify-center mx-auto md:max-w-screen-xl w-full'
        >
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='block mx-auto md:w-1/2 w-11/12'>
                    <h3 className='md:text-xl text-lg text-overlay0 font-medium'>
                        Search for a quote:
                    </h3>
                    <input
                        name='quote'
                        className='bg-surface0 rounded-md border-surface1 border-2 drop-shadow-lg text-lg py-2 px-2 mx-auto w-full transition duration-300 focus:outline-none focus:border-sky focus:bg-base'
                        placeholder='Quote / Keywords'
                        onChange={input =>
                            handleSearch('quote', input.target.value)
                        }
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
                        onChange={input =>
                            handleSearch('name', input.target.value)
                        }
                        defaultValue={searchParams.get('name')?.toString()}
                        autoComplete='off'
                    />
                </div>
            </div>
            <div className='flex justify-center gap-3 mt-3 md:text-lg text-subtext1'>
                <label className='flex my-auto'>
                    <input
                        type='radio'
                        name='sort'
                        value='oldest'
                        className='mr-2'
                        onChange={input => handleSort(input.target.value)}
                    />
                    Sort by oldest
                </label>
                <label className='flex my-auto'>
                    <input
                        type='radio'
                        name='sort'
                        value='newest'
                        className='mr-2'
                        onChange={input => handleSort(input.target.value)}
                    />
                    Sort by newest
                </label>
            </div>
            <RemovalRequest />
        </Form>
    );
}
