import React from 'react'
import workground from '../assets/workback.png';
import Prefoot from '../components/Prefooter';




const OurWork = () => {
    return (
        <>
            <section className ="bg-cover py-28  lg:py-35 xl:py-50 h-full max-h-full" style = {{ backgroundImage: `url(${workground})`}}>
                <section className = 'w-11/12 max-w-8xl mx-auto'>
                    <h1 className = 'mb-3 font-bold text-white text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.7rem]'>Our Work</h1>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>Empowering farmers, transforming agriculture, and building sustainable futures-because technology alone doesn't change lives, people do. We're here to support the hands that feed the world.</p>
                </section>
            </section>
            <section>
              <Prefoot/>
            </section>
        </>
    )
}

export default OurWork
