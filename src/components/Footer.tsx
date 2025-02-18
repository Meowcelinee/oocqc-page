import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='py-4 md:px-4 px-2 text-subtext0 text-xs font-light'>
            <div className='flex md:flex-row flex-col justify-between md:gap-1 md:text-left text-center align-middle'>
                <div className='flex flex-col gap-1 my-auto'>
                    <p className='my-1'>
                        Copyright &copy; 2023-{new Date().getFullYear()}, Out Of
                        Context Queercraft
                    </p>
                    <p className='my-1'>
                        Website by{' '}
                        <Link
                            href='https://bsky.app/profile/marcelineeee.bsky.social'
                            target='_blank'
                            className='text-subtext1 underline transition duration-200 hover:text-mauve'
                        >
                            Marceline Raine
                        </Link>{' '}
                        | Thread by{' '}
                        <Link
                            href='https://bsky.app/profile/nyamelia.is-immensely.gay'
                            target='_blank'
                            className='text-subtext1 underline transition duration-200 hover:text-pink'
                        >
                            Amelia Rose
                        </Link>
                    </p>
                </div>

                <div className='md:block flex justify-center text-xs'>
                    <p className='m-auto md:my-1 text-sm md:text-center'>
                        Made with{' '}
                        <span className='text-maroon font-normal opacity-85'>
                            {'<3'}
                        </span>{' '}
                    </p>
                    <Link
                        href='https://github.com/Meowcelinee/oocqc-page'
                        target='_blank'
                        className='flex bg-surface0 px-2 py-1 md:m-0 my-2 mx-auto rounded-2xl w-fit transition duration-300 hover:bg-surface1'
                    >
                        <Image
                            width={24}
                            height={24}
                            src='/images/github.svg'
                            alt=''
                            className='mx-1'
                        />
                        <span className='mx-1 my-auto text-subtext1 font-medium'>
                            View source
                        </span>
                    </Link>
                </div>
            </div>
            <div className='mx-auto my-2'>
                <hr className='border-surface1 mx-1' />
            </div>
            <p className='text-overlay2 text-xs md:text-left text-center my-2'>
                This site is not affiliated with, or officially endorsed by{' '}
                <Link
                    href='https://queercraft.net/'
                    target='_blank'
                    className='underline text-overlay2 transition duration-200 hover:text-subtext0'
                >
                    Queercraft
                </Link>{' '}
                or Prism.
            </p>
        </footer>
    );
}
