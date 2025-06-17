import React, { useRef } from 'react'
import Swipes1 from '../components/Swipes1'


const Resource = () => {
    return (
        <>
            <section className = 'my-10'>
                <p className = 'text-center font-normal text-[#808080] text-[1rem] md:text-[1rem]  mb-1'>GROW SMARTER</p>
                <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] font-bold mb-4 text-[#0D0D0D]'>Our Resources</h1>
                <section>
                    <Swipes1/>
                </section>
            </section>
        </>
    )
}

export default Resource
