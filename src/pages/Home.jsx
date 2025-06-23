import React from 'react'
import homebackground from '../assets/Frame 1171278702.jpg';
import Marquees from '../components/Marquee';
import Whatwedo from '../components/Whatwedo';
import Benefit from '../components/Benefit';
import Impact from '../components/Imapct';
import Growth from '../components/Growth';
import Resource from '../components/Resource';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import Prefoot from '../components/Prefooter';


const Home = () => {
    return (
        <>
            <section className ="bg-cover py-20 md:py- md:py-30" style = {{ backgroundImage: `url(${homebackground})`}}>
                <section className = 'container mx-auto px-4 md:px-8'>
                    <div className = 'flex flex-col gap-y-6'>
                        <div className = ' w-full md:w-[600px] lg:w-[770px] xl:w-[700px]'>
                            <h1 className = 'font-bold text-[1.75rem] md:text-[40px] lg:text-[2.8rem] xl:text-[3.1rem] text-white leading-[40px] md:leading-[57px] lg:leading-[64px] xl:leading-[74px] '>Utilization of Technology to Empower Farmers Across Africa Agriculture</h1>
                        </div>
                        <div>
                            <button className = 'md:h-[55px] h-[55px] bg-[#4CAF50] rounded-[56px] px-[23px] md:px-[23px] py-3 text-base font-semibold text-white '>Apply for Funding</button>
                        </div>
                    </div>
                </section>
            </section>

            {/*  */}

            <section className = 'container mx-auto px-4 md:px-8 py-5'>
                <Marquees/>
                <Whatwedo/>
            </section>
            <section>
                <Benefit/>
                <Impact/>
                <Growth className = ''/>
            </section>
            <section className = ' py-5'>
                <Resource/>
                <Testimonial/>
                <Faq/>
                <Prefoot/>
            </section>
        </>
    )
}

export default Home
