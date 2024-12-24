import Image from 'next/image';
import { natalieHead, ameliaHead } from '@/data/playerHeads';

export default function AboutCard() {
    return (
        <>
            <div className='md:flex justify-center bg-gradient-to-tr from-crust via-base to-crust drop-shadow-xl py-4'>
                <div className='flex flex-col justify-center md:mx-0 mx-auto text-center md:w-1/3 w-11/12'>
                    <h2 className='text-3xl font-semibold mx-auto' id='oocqc'>
                        About OOCQC
                    </h2>
                    <div className='md:block flex'>
                        <Image
                            className='rounded-md my-4 mx-auto drop-shadow-xl transition duration-500 hover:-translate-y-3'
                            width={170}
                            height={170}
                            src={ameliaHead.head}
                            alt={ameliaHead.ign}
                            title={ameliaHead.ign}
                        />
                        <Image
                            className='rounded-md my-4 mx-auto drop-shadow-xl transition duration-500 hover:-translate-y-3'
                            width={170}
                            height={170}
                            src={natalieHead.head}
                            alt={natalieHead.ign}
                            title={natalieHead.ign}
                        />
                    </div>
                </div>
                <div className='text-center justify-center my-auto md:mx-0 mx-auto py-4 text-medium tracking-wider md:w-1/3 w-5/6 rounded-lg transition duration-500 hover:bg-crust'>
                    <h2
                        className='md:text-3xl text-2xl font-semibold my-4'
                        id='oocqc'
                    >
                        Founded in 2023 by{' '}
                        <span className='text-pink'>Amelia</span>,
                    </h2>
                    <p className='text-lg'>
                        the OOCQC thread became instantly popular from people
                        treating it as the new quotes forum. Later that year, in
                        August, she created the OOCQC resource pack, and
                        released the first version shortly after.
                    </p>
                    <p className='text-lg my-4'>
                        Months later,{' '}
                        <span className='text-pink'>Natalie </span>{' '}
                        <span className='md:hidden'>(right)</span> updated the
                        pack to newer Minecraft versions, adding more quotes and
                        allowing people to continue using the resource pack. She
                        also created this very website you're on.
                    </p>
                </div>
            </div>
        </>
    );
}
