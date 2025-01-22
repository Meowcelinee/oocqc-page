import Image from 'next/image';
import Link from 'next/link';
import { marceline, amelia, Author } from '@/data/authors';

const authors: Author[] = [amelia, marceline];

function ContactCard(props: Author) {
    return (
        <div
            className='bg-mantle rounded-r-md rounded-l-none border-l-4 border-l-surface2 py-3 px-4 my-4 md:mx-0 mx-4 transition duration-200 hover:brightness-110'
            key={props.name}
        >
            <h3 className='text-xl font-medium'>{props.name}</h3>
            <ul className='list-inside list-disc p-2'>
                <li className='marker:text-rosewater'>
                    Discord:{' '}
                    <span className='font-medium text-lavender'>
                        {props.discord}
                    </span>
                </li>
                <li className='marker:text-rosewater'>
                    MC username:{' '}
                    <span className='font-medium text-lavender'>
                        {props.mc}
                    </span>
                </li>
                <li className='marker:text-rosewater'>
                    GitHub:{' '}
                    <Link
                        className='font-medium text-pink underline transition duration-300 hover:text-text'
                        href={props.github.url}
                        target='_blank'
                    >
                        {props.github.name}
                    </Link>
                </li>
                {props.website && (
                    <li className='marker:text-rosewater'>
                        Website:{' '}
                        <Link
                            className='font-medium text-pink underline transition duration-300 hover:text-text'
                            href={props.website.url}
                            target='_blank'
                        >
                            {props.website.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function Contact() {
    return (
        <div className='flex md:flex-row flex-col-reverse justify-center my-4'>
            <div className='flex flex-col justify-center md:mx-8 mx-auto'>
                {authors.map((author, authorKey) => {
                    return <ContactCard {...author} key={authorKey} />;
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
    );
}
