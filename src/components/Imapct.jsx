import React from 'react'
import { impact, impacts } from '../data';




const Imapct = () => {
    return (
        <>
            <section className = 'my-9'>
                <section className = 'container mx-auto px-4 md:px-8'>
                  <p className = 'text-center font-normal text-[#808080] text-base mb-1'>PROOF IN PROGRESS</p>
                  <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>Our Imapact in Numbers</h1>
                    <section className = 'flex flex-col lg:flex-row md:gap-y-9 lg:gap-4  gap-y-7 justify-between items-center my-9'>
                        <div className = 'lg:w-1/2 w-full  '>
                            <div className = 'w-full flex justify-center lg:justify-start flex-wrap gap-x-[10px] gap-y-[10px] md:gap-x-[14px] md:gap-y-[14px]'>
                                {impact.map((image) => {
                                    return (
                                        <div key = {image.id} className = ' w-[28%] md:w-[24%] lg:w-[28%] xl:w-[25%] h-full flex'>
                                            <img src= {image.image} alt="" className = 'w-full object-cover h-full rounded-[18px]'/>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className = 'lg:w-1/2 w-full flex justify-center lg:justify-start xl:justify-center  '>
                            <div className = 'w-[75%] flex items-center md:w-[78%] lg:w-full '>
                              <div className = 'w-full flex flex-wrap  md:justify-between gap-y-7 lg:gap-x-5 lg:gap-y-5 xl:gap-x-7 xl:gap-y-13 '>
                               {impacts.map((imp) => {
                                   return (
                                       <div key = {imp.id} className = 'w-full md:justify-start  md:w-[40%] lg:w-[46%] xl:w-[45%] flex gap-3' >
                                           <div>
                                             <div className = 'w-[39px]'>
                                                <img src= {imp.image} alt="" className = 'w-full'/>
                                             </div>
                                           </div>
                                           <div className = 'flex flex-col'>
                                               <h1 className = 'font-semibold text-[1.3rem] md:text-[1.7rem] text-[#3A3A3A] '>{imp.number}</h1>
                                               <p className = 'font-semibold text-base text-[#808080] '>{imp.board}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                           </div>

                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Imapct
