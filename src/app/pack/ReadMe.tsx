import Link from 'next/link';
import Image from 'next/image';

const reviews = [
    { reviewer: 'Jenn', text: 'I neednthos pack. Hell yeah' },
    { reviewer: 'Emilia', text: '😭' },
    { reviewer: 'Rhi', text: 'why am i being pinged abt this i dont use this' },
    { reviewer: 'Locko', text: 'amazing' },
    { reviewer: 'Hoon', text: '🤓' },
];

export default function ReadMe() {
    return reviews.map((review, reviewKey) => {
        return (
            <>
                <div className='flex gap-4 border-b-2 border-b-surface2'>
                    <p className='text-subtext0 text-lg font-medium italic pb-1'>
                        README.md
                    </p>
                    <p>|</p>
                    <Link
                        className='text-subtext0 md:text-lg font-medium italic underline pb-1 transition duration-300 hover:text-text'
                        href='https://github.com/Nyatalieeee/OOCQC'
                        target='_blank'
                    >
                        View source
                    </Link>
                </div>
                <h1 className='my-3 md:text-4xl text-3xl font-semibold'>
                    Out of Context QC (OOCQC)
                </h1>
                <div className='text-lg'>
                    <Link target='_blank' href='/images/gh-preview.png'>
                        <Image
                            width={400}
                            height={400}
                            alt=''
                            src='/images/gh-preview.png'
                            className='my-2 rounded-md'
                        />
                    </Link>

                    <p className='my-2'>Resource pack for the OOCQC Thread!</p>
                    <p className='my-2'>
                        Created by Amelia, maintained by her and Natalie - last
                        updated December 14th 2024
                    </p>

                    <h2 className='md:text-3xl text-2xl font-semibold mt-3 mb-1'>
                        Reviews
                    </h2>
                    <hr className='border-overlay0' />
                    <div
                        className='bg-crust text-lg mt-4 mb-2 px-3 py-3 border-l-8 border-l-base transition duration-200 hover:border-l-surface1'
                        key={reviewKey}
                    >
                        <p id='oocqc'>"{review.text}"</p>
                    </div>
                    <p className='font-medium'>--{review.reviewer}</p>
                </div>
            </>
        );
    });
}
