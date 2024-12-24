import Tagline from '@/components/homepage/Tagline';
import HomepageCards from '@/components/homepage/Card';
import AboutCard from '@/components/homepage/About';
import Contact from '@/components/homepage/Contact';

export default function Home() {
    return (
        <>
            <div className='md:py-4 py-2'>
                <Tagline />
                <section>
                    <HomepageCards />
                </section>
                <section>
                    <AboutCard />
                </section>
                <section>
                    <Contact />
                </section>
            </div>
        </>
    );
}
