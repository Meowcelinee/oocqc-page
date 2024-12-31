import Link from 'next/link';

interface Release {
    downloadUrl: string;
    mcVersion: string;
    sourceUrl: string;
    version: string;
    notes: string[];
}

const releases: Release[] = [
    {
        downloadUrl:
            'https://github.com/Nyatalieeee/OOCQC/releases/download/v1.4.0/OOCQC-v1.4.0-1.21.zip',
        mcVersion: '1.21.1',
        sourceUrl: 'https://github.com/Nyatalieeee/OOCQC/releases/v1.4.0/',
        version: '1.4.0',
        notes: [
            '🎉 1.21.1 now supported!',
            'Added quotes posted through December 14th',
            'Fixed formatting of some quotes',
            "If you're having trouble with the resource pack not showing up in the menu, unzip the pack and try again.",
        ],
    },
    {
        downloadUrl:
            'https://github.com/Nyatalieeee/OOCQC/releases/download/v1.3.3/OOCQC-v1.3.3-1.20.4.zip',
        mcVersion: '1.20.4',
        sourceUrl: 'https://github.com/Nyatalieeee/OOCQC/releases/v1.3.3/',
        version: '1.3.3',
        notes: ['Added quotes posted throughout the month of May'],
    },
    {
        downloadUrl:
            'https://github.com/Nyatalieeee/OOCQC/releases/download/v1.3.2/OOCQC-v1.3.2-1.20.4.zip',
        mcVersion: '1.20.4',
        sourceUrl: 'https://github.com/Nyatalieeee/OOCQC/releases/v1.3.2/',
        version: '1.3.2',
        notes: [
            'Added a missed quote about planet vore',
            '16 new splash texts',
        ],
    },
];

export default function Releases() {
    return releases.map((release, key) => {
        return (
            <div
                className='md:flex md:justify-between bg-gradient-to-br from-crust via-mantle to-crust px-3 py-2 mb-4 border-l-4 border-l-surface1 drop-shadow-md'
                key={key}
            >
                <div className='md:mx-2'>
                    <div className='py-1'>
                        <p className='md:text-2xl text-xl font-semibold tracking-wide'>
                            Version {release.version}
                        </p>
                        <p className='md:text-lg text-subtext0 tracking-wide'>
                            For Minecraft{' '}
                            <span className='text-pink'>
                                {release.mcVersion}
                            </span>
                        </p>
                    </div>
                    <div className=''>
                        <h3 className='md:text-xl text-lg font-medium text-subtext1'>
                            Patch notes:
                        </h3>
                        <ul className='md:text-lg list-disc list-inside text-subtext0 marker:text-sky md:my-1 my-2'>
                            {release.notes.map(note => {
                                return <li key={note}>{note}</li>;
                            })}
                        </ul>
                    </div>
                </div>

                <hr className='md:hidden visible my-4 border-overlay0 mx-auto w-11/12' />

                <div className='flex flex-col justify-center px-3 md:mx-2 md:my-0'>
                    <p className='md:text-2xl text-xl text-center font-medium'>
                        Download
                    </p>
                    <div className='flex gap-1 my-1 justify-center'>
                        <Link
                            className='flex bg-surface1 rounded-l-xl px-2 py-1 font-medium transition duration-300 hover:bg-surface2'
                            href={release.downloadUrl}
                            target='_blank'
                        >
                            <i className='nf nf-oct-download my-auto mx-1'></i>
                            <p>Direct</p>
                        </Link>
                        <Link
                            className='flex bg-surface1 rounded-r-xl px-2 py-1 font-medium transition duration-300 hover:bg-surface2'
                            href={release.sourceUrl}
                            target='_blank'
                        >
                            <i className='nf nf-md-source_branch my-auto mx-1'></i>
                            <p>Source</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    });
}
