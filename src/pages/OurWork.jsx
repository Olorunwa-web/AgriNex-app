import React from 'react'
import workground from '../assets/workback.png';
import Prefoot from '../components/Prefooter';
import { workstuff } from '../data';
import Impact from '../components/Imapct';


const OurWork = () => {
    return (
        <>
            <section className ="bg-cover py-28  lg:py-35 xl:py-50 h-full max-h-full" style = {{ backgroundImage: `url(${workground})`}}>
                <section className = 'w-11/12 max-w-8xl mx-auto'>
                    <h1 className = 'mb-3 font-bold text-white text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.7rem]'>Our Work</h1>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>Empowering farmers, transforming agriculture, and building sustainable futures-because technology alone doesn't change lives, people do. We're here to support the hands that feed the world.</p>
                </section>
            </section>

            {/*  */}

            <section className = 'my-7 my- w-11/12 max-w-8xl mx-auto'>
                <p className = ' text-center font-normal text-[#808080] text-base mb-1'>HOW WE MAKE IT HAPPEN</p>
                <h1 className = 'text-center text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>What We Do</h1>
                <section className = 'py-8'>
                    <div className = 'flex flex-wrap gap-8 justify-between '>
                        {workstuff.map((work) =>{
                            return (
                                <div key = {work.id} className = 'w-full md:w-[30%] lg:w-[31%] flex flex-col gap-2 justify-center '>
                                    <div className = 'w-full flex justify-center '>
                                        <img src={work.image} alt="" className = 'w-[50px]'/>
                                    </div>
                                    <div className = 'text-center'>
                                        <h1 className = 'mb-2 font-bold text-[#0D0D0D] text-[1.3rem] md:text-[1.3rem] lg:text-[1.4rem] '>{work.title}</h1>
                                        <p className = 'w-[80%] xl:w-[60%] mx-auto font-medium text-[#808080] text-base '>{work.words}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </section>
            </section>
            <section>

            {/*  */}

            <section className = 'py-3 bg-[#EDF7EE]'>
              <Impact/>
            </section>

            {/*  */}

            <section>
                
            </section>
              <Prefoot/>
            </section>
        </>
    )
}

export default OurWork
