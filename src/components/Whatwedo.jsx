import React, { useState } from 'react'
import sideimg from '../assets/Frame 1171278930.jpg';
import { accordions } from '../data';
import arrorwleft from '../assets/arrow-left.svg'
import arrorwleftgreen from '../assets/arrow-left (2).svg';


const Whatwedo = () => {

    const [activeIndex, setActiveIndex] = useState(null);


    return (
        <>
            <section className = 'my-11'>
                <p className = 'text-center font-normal text-[#808080] text-[1rem] md:text-[1rem]  mb-1'>WHAT WE DO</p>
                <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] font-bold mb-4 text-[#0D0D0D]'>How AgriNex Works</h1>
                <section className = 'pt-4 w-full md:h-1/2 h-full flex flex-col lg:flex-row gap-x-2 lg:gap-x-8 xl:gap-x-0 items-center justify-between gap-y-7 '>
                    <div className = 'w-full  h-full flex justify-start items-start lg:w-[55%]'>
                        <div className = 'w-full md:h-[30rem]  xl:w-[90%]'>
                          <img src={ activeIndex !== null ? accordions[activeIndex].image : `${sideimg}` } alt="" className = 'w-full h-full md:rounded-[18px] object-cover transition duration-500'/>
                        </div>
                    </div>
                    <section className = 'w-full lg:w-[45%] flex flex-col gap-6 xl:gap-9'>
                        {accordions.map((accrod, index) =>{
                            const isActive = activeIndex === index;
                            return (
                                <div>
                                <div 
                                key = {index}
                                onClick={() => setActiveIndex(isActive ? null : index)}
                                className={`border-b-1 ps-3 pb-3  cursor-pointer transition-transform transform ease-in-out duration-900 ${
                                    isActive
                                      ? 'border-[#6abd6e] text-[#6abd6e]'
                                      : 'border-[#E4E4E4] hover:text-[#6abd6e] hover:border-[#6abd6e]'
                                  }`} 
                                 >
                                     <div className = 'flex justify-between items-center'>
                                         <h4 className = 'md:text-[1.3rem] text-[1.2rem] font-normal '>{accrod.title}</h4>
                                         <img src= {arrorwleft} alt=""
                                          className={`transition-transform duration-300 w-[22px] ${
                                            isActive ? ' text-green-600 ' : 'text-gray-500 group-hover:text-green-600'
                                          }`}
                                         />
                                     </div>
                                </div>
                                    { isActive && (
                                         <div className = 'ps-3 pt-3'>
                                             <h3
                                               className={`text-[1rem] font-medium ${
                                                isActive ? ' text-[#808080] ' : 'text-gray-500'
                                              }`}
                                             >{accrod.content}</h3>
                                         </div>
                                 )}
                                </div>
                            )
                        })}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Whatwedo
