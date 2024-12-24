import Tagline from '@/components/homepage/Tagline';
import HomepageCards from '@/components/homepage/Card';

export default function Home() {
    return (
        <>
            <div className='md:py-4 py-2'>
                <Tagline />
                <section>
                    <HomepageCards />
                </section>
            </div>
        </>
    );
}
