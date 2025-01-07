import Image from 'next/image';
import Link from 'next/link';
import { natalie, amelia, Author } from '@/data/authors';

const authors: Author[] = [amelia, natalie];

export default function Contact() {
    return (
        <>
            <div className='flex md:flex-row flex-col-reverse justify-center my-4'>
                <div className='flex flex-col justify-center md:mx-8 mx-auto'>
                    {authors.map(author => {
                        return (
                            <div
                                className='bg-mantle rounded-r-md rounded-l-none border-l-4 border-l-surface2 py-3 px-4 my-4 md:mx-0 mx-4 transition duration-200 hover:brightness-110'
                                key={author.name}
                            >
                                <h3 className='text-xl font-medium'>
                                    {author.name}
                                </h3>
                                <ul className='list-inside list-disc p-2'>
                                    <li className='marker:text-rosewater'>
                                        Discord:{' '}
                                        <span className='font-medium text-lavender'>
                                            {author.discord}
                                        </span>
                                    </li>
                                    <li className='marker:text-rosewater'>
                                        MC username:{' '}
                                        <span className='font-medium text-lavender'>
                                            {author.mc}
                                        </span>
                                    </li>
                                    <li className='marker:text-rosewater'>
                                        Github:{' '}
                                        <Link
                                            className='font-medium text-pink underline transition duration-300 hover:text-text'
                                            href={author.github.url}
                                            target='_blank'
                                        >
                                            {author.github.title}
                                        </Link>
                                    </li>
                                    {author.website && (
                                        <li className='marker:text-rosewater'>
                                            Website:{' '}
                                            <Link
                                                className='font-medium text-pink underline transition duration-300 hover:text-text'
                                                href={author.website.url}
                                                target='_blank'
                                            >
                                                {author.website.title}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className='justify-center md:mx-8 mx-auto md:my-auto'>
                    <h2 className='text-3xl text-center font-semibold'>
                        Need to contact us?
                    </h2>
                    <Image
                        width={128}
                        height={128}
                        className='my-4 mx-auto drop-shadow-xl transition duration-500 hover:-translate-y-3'
                        alt=''
                        src='/images/contact-sky.svg'
                    />
                </div>
            </div>
        </>
    );
}
