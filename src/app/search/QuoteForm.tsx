'use client';

import Form from 'next/form';

export default function QuoteForm() {
    return (
        <Form action='/search' className='flex flex-col justify-center w-full'>
            <input
                name='quote'
                className='bg-surface0 rounded-md border-surface1 border-2 drop-shadow-lg text-lg py-2 px-2 mx-auto md:w-11/12 w-full transition duration-300 focus:outline-none focus:border-sky focus:bg-base'
                placeholder='Keywords / Name'
            />

            <div className='flex justify-center mx-auto mt-3 gap-5'>
                <label className='text-lg'>
                    <input type='radio' name='type' value='quote' /> Quote
                </label>
                <label className='text-lg'>
                    <input
                        type='radio'
                        name='type'
                        value='person'
                        className='bg-pink border-4 border-sky'
                    />{' '}
                    Person
                </label>
            </div>
        </Form>
    );
}
