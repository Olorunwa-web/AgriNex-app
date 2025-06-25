import React from 'react'
import Swipes2 from '../components/Swipes2';



const Testimonial = () => {
    return (
        <>
             <section className = 'mt-14 mb-7'>
                <p className = 'text-center font-normal text-[#808080] text-base mb-1'>WHAT THEY SAY</p>
                <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>Testimonial</h1>
                <section>
                    <Swipes2/>
                </section>
            </section>
        </>
    )
}

export default Testimonial
