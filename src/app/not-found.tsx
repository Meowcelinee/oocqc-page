import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <div className='bg-crust md:py-20 py-28'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col md:w-1/3 w-2/3 justify-center'>
                        <div className='block mx-auto my-4 align-middle text-center '>
                            <h1 className='text-4xl'>:(</h1>
                        </div>

                        <hr className='md:my-8 my-12 border-surface2' />

                        <div className='my-3 mx-auto font-semibold text-xl text-center'>
                            That page doesn't exist.
                        </div>
                        <Link
                            href='/'
                            className='bg-surface0 my-3 px-3 py-2 rounded-lg mx-auto transition-all duration-300 text-subtext1 hover:bg-pink hover:text-crust'
                        >
                            <i className='nf nf-cod-arrow_left mr-2'></i>Go home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
