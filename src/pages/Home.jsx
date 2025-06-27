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
import  { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <motion.section className ="bg-cover py-34 md:py-40  lg:py-35 xl:py-43 h-full max-h-full " style = {{ backgroundImage: `url(${homebackground})`}} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}               
              transition = {{ delay: 0.3, duration: 0.8, ease: 'easeInOut'}}
            >
                <section className = 'container w-11/12 max-w-8xl mx-auto'>
                    <div className = 'flex flex-col gap-y-6'>
                        <div className = ' w-full md:w-[600px] lg:w-[770px] xl:w-[700px]'>
                            <h1 className = 'font-bold text-[1.75rem] md:text-[40px] lg:text-[2.8rem] xl:text-[3.1rem] text-white leading-[40px] md:leading-[57px] lg:leading-[64px] xl:leading-[69px] '>Utilization of Technology to Empower Farmers Across Africa Agriculture</h1>
                        </div>
                        <div>
                            <button className = ' bg-[#4CAF50] rounded-[56px] px-[20px] md:px-[20px] py-3 md:py-4  text-base font-semibold text-white '>Apply for Funding</button>
                        </div>
                    </div>
                </section>
            </motion.section>

            {/*  */}

            <section className = 'container w-11/12 max-w-8xl mx-auto py-5'>
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
