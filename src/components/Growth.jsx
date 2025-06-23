import React from 'react'
import mark from '../assets/Vector.svg';
import growthimg from '../assets/unsplash_zRqRhIJqdnI.png';


const Growth = () => {
    return (
        <>
            <section className = 'bg-[#E3EDE4] mt-16 py-6'>
                <section className = 'container mx-auto px-4 md:px-8'>
                    <section className = 'flex flex-col items-center justify-between gap-y-7 md:gap-y-4 lg:gap-y-0  md:flex-row w-full'>
                        <div className = 'w-full md:w-[49%] lg:w-[45%] '>
                             <p className = 'font-normal text-[#808080] base  mb-1'>FUND YOUR GROWTH</p>
                             <h1 className = 'text-[1.4rem] md:text-[1.7rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>Grow your Farm Our Financial Supports </h1>
                             <div className = 'flex flex-col gap-4'>
                                 <div className = 'flex items-center gap-3'>
                                     <div className = 'bg-[#2E6B31] flex justify-center rounded-full items-center  w-[27px] h-[27px] '>
                                         <img src= {mark} alt="" className = 'w-3'/>
                                     </div>
                                     <div>
                                         <p className = 'font-normal text-[#353535] text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem]'>Low-Interest Agri-Loans</p>
                                     </div>
                                 </div>
                                 <div className = 'flex items-center gap-3'>
                                     <div className = 'bg-[#2E6B31] flex justify-center rounded-full items-center  w-[27px] h-[27px] '>
                                         <img src= {mark} alt="" className = 'w-3'/>
                                     </div>
                                     <div>
                                         <p className = 'font-normal text-[#353535] text-[1.1rem] md:text-[1.2rem]   lg:text-[1.4rem]'>Government Grant Assistance</p>
                                     </div>
                                 </div>
                                 <div className = 'flex items-center gap-3'>
                                     <div className = 'bg-[#2E6B31] flex justify-center rounded-full items-center  w-[27px] h-[27px] '>
                                         <img src= {mark} alt="" className = 'w-3'/>
                                     </div>
                                     <div>
                                         <p className = 'font-normal text-[#353535] text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem]'>Equipment Leasing Options</p>
                                     </div>
                                 </div>
                             </div>
                             <button className = ' mt-7 bg-[#4CAF50] py-3 px-4 rounded-[56px] font-semibold text-white text-[1rem] '>Check Eligibility</button>
                        </div>
                        <div className = 'w-full md:w-[49%] lg:w-[55%] flex justify-end'>
                            <div className = 'w-full xl:w-[80%]  lg:h-[35rem]'>
                                <img src= {growthimg} alt="" className = 'w-full h-full rounded-[17px] object-cover'/>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Growth
