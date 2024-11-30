import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className='bg-mantle py-3 px-2 text-subtext0 text-sm font-light'>
                <p className='my-1'>
                    Site by{' '}
                    <Link
                        href='https://github.com/Nyatalieeee/'
                        target='_blank'
                        className='underline text-subtext1 transition duration-200 hover:text-subtext1'
                    >
                        Natalie Raine
                    </Link>
                </p>
                <p className='my-1'>
                    Made with{' '}
                    <span className='text-maroon font-normal'>{'<3'}</span>
                </p>
                <div className='mx-auto my-2'>
                    <hr className='border-surface1 mx-2' />
                </div>
                <p className='text-subtext0 text-xs'>
                    This site is not affiliated with, or endorsed by{' '}
                    <Link
                        href='https://queercraft.net/'
                        target='_blank'
                        className='underline text-overlay2 transition duration-200 hover:text-subtext1'
                    >
                        Queercraft
                    </Link>{' '}
                    or Prism.
                </p>
            </footer>
        </>
    );
}
