interface Release {
    downloadUrl: string;
    mcVersion: string;
    releaseDate: string;
    sourceUrl: string;
    version: string;
    notes: string[];
}

const releases: Release[] = [
    {
        downloadUrl:
            'https://github.com/Meowcelinee/OOCQC/releases/download/v1.4.0/OOCQC-v1.4.0-1.21.zip',
        mcVersion: '1.21.1',
        releaseDate: 'December 14, 2024',
        sourceUrl: 'https://github.com/Meowcelinee/OOCQC/releases/v1.4.0/',
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
            'https://github.com/Meowcelinee/OOCQC/releases/download/v1.3.3/OOCQC-v1.3.3-1.20.4.zip',
        mcVersion: '1.20.4',
        releaseDate: 'May 30, 2024',
        sourceUrl: 'https://github.com/Meowcelinee/OOCQC/releases/v1.3.3/',
        version: '1.3.3',
        notes: ['Added quotes posted throughout the month of May'],
    },
    {
        downloadUrl:
            'https://github.com/Meowcelinee/OOCQC/releases/download/v1.3.2/OOCQC-v1.3.2-1.20.4.zip',
        mcVersion: '1.20.4',
        releaseDate: 'May 5, 2024',
        sourceUrl: 'https://github.com/Meowcelinee/OOCQC/releases/v1.3.2/',
        version: '1.3.2',
        notes: [
            'Added a missed quote about planet vore',
            '16 new splash texts',
        ],
    },
];

export default releases;
export type { Release };
