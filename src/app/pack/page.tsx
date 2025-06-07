import Link from 'next/link';
import ReadMe from '@/components/pack/ReadMe';
import Releases from '@/components/pack/Releases';
import releases from '@/data/pack/releases';
import fonts from '@/fontConfig';

export default function DownloadPage() {
    return (
        <div className='flex-col md:py-4 py-2'>
            <div className='mx-4 my-4 md:px-8'>
                <h1 className='animate-appearShorter md:my-6 my-4 md:text-4xl text-3xl text-center font-semibold drop-shadow-lg'>
                    The OOCQC Resource Pack
                </h1>
                <div className='flex'>
                    <Link
                        className='animate-appear bg-surface0 rounded-md px-3 py-2 my-4 mx-auto text-subtext0 transition duration-200 hover:bg-surface1 hover:text-subtext1'
                        href='#releases'
                    >
                        Scroll to downloads
                    </Link>
                </div>

                <div className='bg-mantle rounded-lg border-[1px] border-surface1 py-2 px-4'>
                    <ReadMe />
                </div>
                <div className='rounded-lg border-[1px] border-surface1 my-4 py-2 px-4'>
                    <h2
                        className={`font-semibold md:text-3xl text-2xl my-2 ${fonts.merriweather.className}`}
                    >
                        Releases
                    </h2>
                    <div className='px-4 py-3'>
                        {releases.map((release, key) => {
                            return <Releases {...release} key={key} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
