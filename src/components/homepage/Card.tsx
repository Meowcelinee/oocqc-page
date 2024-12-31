import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

interface HomepageCard {
    alt: string;
    description: string;
    image: string;
    imageHeight: number;
    imageWidth: number;
    link: string;
    linkText: string;
}

const homepageCards: HomepageCard[] = [
    {
        alt: '',
        description: 'A new quote. Every time the game is launched.',
        image: '/images/packpreview.png',
        imageHeight: 300,
        imageWidth: 300,
        link: '/pack',
        linkText: 'Get the resource pack!',
    },
    {
        alt: '',
        description: 'Need to search for a quote?',
        image: '/images/search.svg',
        imageHeight: 250,
        imageWidth: 250,
        link: '/search',
        linkText: 'Find a quote!',
    },
];

export default function HomepageCards() {
    return homepageCards.map((card, cardIndex) => {
        const oddCard = cardIndex % 2 === 1;

        return (
            <div
                className={classNames(
                    'flex flex-col justify-center md:gap-2 gap-16 mx-auto mb-4 md:rounded-lg bg-gradient-to-br',
                    {
                        'from-crust via-mantle to-crust': !oddCard,
                        'base ': oddCard,
                    }
                )}
            >
                <div
                    className={classNames(
                        'flex md:justify-center flex-col-reverse',
                        {
                            'md:flex-row': !oddCard,
                            'md:flex-row-reverse': oddCard,
                        }
                    )}
                >
                    <div className='flex flex-col justify-center md:mx-4 text-center md:w-1/4'>
                        <p className='md:text-2xl font-semibold text-xl text-subtext1 mx-auto md:mt-0 mt-4'>
                            {card.description}
                        </p>
                        <Link
                            href={card.link}
                            className={`flex mx-auto my-5 px-4 py-3 rounded-lg bg-sky text-crust font-medium md:text-lg drop-shadow-lg transition duration-300 hover:bg-surface0 hover:text-text`}
                        >
                            <p>{card.linkText}</p>
                            <i className='my-auto ml-2 nf nf-cod-arrow_right'></i>
                        </Link>
                    </div>
                    <Image
                        width={card.imageWidth}
                        height={card.imageHeight}
                        src={card.image}
                        className='md:my-auto mt-4 md:m-0 mx-auto rounded-lg transition duration-500 hover:-translate-y-3'
                        alt={card.alt}
                    />
                </div>
            </div>
        );
    });
}
