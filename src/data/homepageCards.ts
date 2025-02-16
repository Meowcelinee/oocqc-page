type ImageType = { src: string; height: number; width: number };

interface HomepageCard {
    alt: string;
    description: string;
    image: ImageType;
    link: string;
    linkText: string;
}

const homepageCards: HomepageCard[] = [
    {
        alt: 'The pack.png for the OOCQC resource pack',
        description: 'A new quote, every time you launch the game.',
        image: {
            src: '/images/packpreview.png',
            height: 300,
            width: 300,
        },
        link: '/pack',
        linkText: 'Get the resource pack!',
    },
    {
        alt: '',
        description: 'Need to search for a quote?',
        image: {
            src: '/images/search.svg',
            height: 250,
            width: 250,
        },
        link: '/search',
        linkText: 'Find a quote!',
    },
];

export default homepageCards;
export type { ImageType, HomepageCard };
