import fonts from '@/fontConfig';

export default function Tagline() {
    return (
        <>
            <section className='animate-appear md:text-6xl text-4xl font-medium drop-shadow-xl text-center md:my-14 my-8 tracking-wide'>
                <h1 className={`my-2 ${fonts.merriweather.className}`}>
                    Queercraft, but
                </h1>
                <h1 className={`my-2 ${fonts.merriweather.className}`}>
                    out of context.
                </h1>
                <h3 className='md:text-3xl text-xl text-overlay2 my-3'>
                    (As if context would make it better.)
                </h3>
            </section>

            <br />
        </>
    );
}
