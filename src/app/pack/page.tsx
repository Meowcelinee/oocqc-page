import Link from 'next/link';
import ReadMe from './ReadMe';
import Releases from './Releases';

export default function DownloadPage() {
    return (
        <>
            <div className='flex-col md:py-4 py-2'>
                <div className='mx-4 my-4 md:px-8'>
                    <h1 className='md:my-8 my-5 md:text-5xl text-4xl text-center font-semibold drop-shadow-lg'>
                        The OOCQC Resource Pack
                    </h1>
                    <Link className='text-center w-full' href='#releases'>
                        <p className='text-center text-subtext1 md:text-xl text-lg my-4 underline transition duration-300 hover:text-sky'>
                            Scroll to downloads
                        </p>
                    </Link>

                    <div className='bg-mantle rounded-lg border-[1px] border-surface1 py-2 px-4'>
                        <ReadMe />
                    </div>
                    <div className='rounded-lg border-[1px] border-surface1 my-4 py-2 px-4'>
                        <h2
                            className='font-semibold md:text-3xl text-2xl my-2'
                            id='releases'
                        >
                            Releases
                        </h2>
                        <div className='px-4 py-3'>
                            <Releases />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
