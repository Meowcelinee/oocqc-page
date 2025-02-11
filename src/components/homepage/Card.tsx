import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import homepageCards from '@/data/homepageCards';

export default function HomepageCards() {
    return homepageCards.map((card, cardIndex) => {
        const oddCard = cardIndex % 2 === 1;

        return (
            <div
                className={classNames(
                    'flex flex-col justify-center md:gap-2 gap-16 mx-auto mb-4 ',
                    {
                        'bg-gradient-to-br from-crust via-mantle to-crust':
                            !oddCard,
                        'bg-base ': oddCard,
                    }
                )}
            >
                <div
                    className={classNames(
                        'animate-appearLonger flex md:justify-center flex-col-reverse',
                        {
                            'md:flex-row': !oddCard,
                            'md:flex-row-reverse': oddCard,
                        }
                    )}
                >
                    <div
                        className={classNames(
                            'flex flex-col justify-center md:mx-4 md:w-1/4',
                            {
                                'md:text-left text-center': !oddCard,
                                'text-center': oddCard,
                            }
                        )}
                    >
                        <p className='md:text-2xl font-semibold text-xl text-subtext1 mx-auto md:mt-0 mt-4'>
                            {card.description}
                        </p>
                        <Link
                            href={card.link}
                            className={classNames(
                                `flex w-fit mx-auto my-5 px-4 py-3 rounded-lg bg-sky text-crust font-medium md:text-lg drop-shadow-lg transition duration-300 hover:bg-surface0 hover:text-text`,
                                {
                                    'md:mx-auto': oddCard,
                                    'md:mx-0': !oddCard,
                                }
                            )}
                        >
                            <p>{card.linkText}</p>
                            <i className='my-auto ml-2 nf nf-cod-arrow_right'></i>
                        </Link>
                    </div>
                    <Image
                        width={card.image.width}
                        height={card.image.height}
                        src={card.image}
                        className='md:my-auto mt-4 md:m-0 mx-auto rounded-lg transition duration-500 hover:-translate-y-3'
                        alt={card.alt}
                    />
                </div>
            </div>
        );
    });
}
