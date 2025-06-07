import Link from 'next/link';
import Image from 'next/image';
import reviews from '@/data/pack/reviews';
import fonts from '@/fontConfig';

function Reviews() {
    return reviews.map((review, reviewKey) => {
        return (
            <>
                <div
                    className='bg-crust text-lg mt-4 mb-2 px-3 py-3 border-l-8 border-l-base transition duration-300 md:hover:border-l-surface0 md:hover:bg-mantle md:hover:brightness-105'
                    key={reviewKey}
                >
                    <p className={fonts.merriweather.className}>
                        &quot;{review.text}&quot;
                    </p>
                </div>
                <p className='font-medium'>--{review.reviewer}</p>
            </>
        );
    });
}

export default function ReadMe() {
    return (
        <>
            <div className='flex gap-4 border-b-2 border-b-surface2'>
                <p className='text-subtext0 text-lg font-medium italic pb-1'>
                    README.md
                </p>
                <p>|</p>
                <Link
                    className='text-subtext0 md:text-lg font-medium italic underline pb-1 transition duration-300 hover:text-text'
                    href='https://github.com/Meowcelinee/OOCQC'
                    target='_blank'
                >
                    View source
                </Link>
            </div>
            <h1 className='my-3 md:text-4xl text-3xl font-semibold'>
                Out of Context QC (OOCQC)
            </h1>
            <div className='text-lg'>
                <div>
                    <Image
                        width={400}
                        height={56293874628464769876987349587}
                        alt=''
                        src='/images/gh-preview.png'
                        className='my-2 rounded-md w-fit h-auto'
                    />
                </div>

                <p className='my-2'>Resource pack for the OOCQC Thread!</p>
                <p className='my-2'>
                    Created by Amelia, maintained by her and Marceline - last
                    updated December 14th 2024
                </p>

                <h2 className='md:text-3xl text-2xl font-semibold mt-3 mb-1'>
                    Reviews
                </h2>
                <hr className='border-overlay0' />
                <Reviews />
            </div>
        </>
    );
}
