import Image from 'next/image';
import getPlayerSkin from '@/lib/getPlayerSkin';
import classNames from 'classnames';
import { amelia, marceline } from '@/data/authors';
import { fonts } from '@/app/layout';

type PlayerHeadSource = { name: string; flipped?: boolean };

async function PlayerModel(prop: PlayerHeadSource) {
    const skinData = await getPlayerSkin(prop.name);
    return (
        <Image
            className={classNames(
                'rounded-md my-4 mx-auto drop-shadow-xl transition duration-500 md:hover:-translate-y-3',
                {
                    '-scale-x-100 md:scale-x-100': prop.flipped,
                }
            )}
            width={170}
            height={170}
            src={skinData.bust}
            alt={prop.name}
            title={prop.name}
            unoptimized
        />
    );
}

export default function AboutCard() {
    return (
        <div className='bg-gradient-to-tr from-crust via-base to-crust drop-shadow-xl py-4'>
            <div className='animate-appearEvenLonger md:flex justify-center max-w-screen-2xl mx-auto'>
                <div className='flex flex-col justify-center md:mx-0 mx-auto text-center md:w-1/3 w-11/12'>
                    <h2
                        className={`text-3xl font-semibold mx-auto ${fonts.merriweather.className}`}
                    >
                        About OOCQC
                    </h2>
                    <div className='md:block flex'>
                        <PlayerModel name={amelia.mc} />
                        <PlayerModel name={marceline.mc} flipped />
                    </div>
                </div>
                <div className='text-center justify-center my-auto md:mx-0 mx-auto py-4 md:px-0 px-2 text-medium tracking-wide md:w-1/3 w-5/6 rounded-lg transition duration-500'>
                    <h2
                        className={`md:text-3xl text-2xl font-semibold my-4 ${fonts.merriweather.className}`}
                    >
                        Founded in 2023 by{' '}
                        <span className='text-pink'>Amelia,</span>
                    </h2>
                    <p className='text-lg'>
                        the OOCQC thread became instantly popular from people
                        treating it as the new quotes forum. Later that year, in
                        August, she created the OOCQC resource pack, and
                        released the first version shortly after.
                    </p>
                    <p className='text-lg my-4'>
                        Months later,{' '}
                        <span className='text-pink'>Marceline </span>{' '}
                        <span className='md:hidden'>(right)</span> updated the
                        pack to newer Minecraft versions, adding more quotes and
                        allowing people to continue using the resource pack. She
                        also created this very website you&apos;re on.
                    </p>
                </div>
            </div>
        </div>
    );
}
