import React from 'react'
import mark from '../assets/Vector.svg';
import { benefits } from '../data'
import beneefitimage from '../assets/Group 26869.png';
import benearrow from '../assets/Vector (2).svg';




const Benefit = () => {
    return (
        <>
            <section className = 'bg-[#E3EDE4] md:mt10  mt-0 '>
                <section className = 'container w-11/12 max-w-8xl mx-auto h-full  flex flex-col justify-between items-center gap-y-8  lg:gap-x-5 xl:gap-y-0 md:flex-row py-8 md:py-10'>
                  <section className = 'w-full md:pr-0 md:p lg:pr-0  md:w-[55%] h-full'>
                    <p className = 'font-semibold text-base text-[#808080]'>BENEFITS</p>
                    <h1 className = 'text-[1.4rem]  md:text-[1.7rem] lg:text-[1.7rem] font-bold text-[#0D0D0D]'>What Makes Us Different</h1>
                    <div className = 'mt-7 md:mt-3 lg:mt-7 '>
                        <div className = 'w-full flex flex-col gap-y-4'>
                            {benefits.map((ben) =>{
                                return (
                                    <div key =  {ben.id} className = 'w-full flex gap-4'>
                                        <div >
                                          <div className = 'bg-[#2E6B31] rounded-full w-[27px] h-[27px] flex justify-center items-center' >
                                            <img src= {mark} alt="" className = 'w-3'/>
                                          </div>
                                        </div>
                                        <div className = 'flex flex-col gap-3 md:gap-0 lg:gap-2'>
                                            <h4 className = 'font-medium text-[1.1rem] md:text-[1.2rem] '>{ben.title}</h4>
                                            <p className = 'font-normal text-[#424242] text-base '>{ben.words}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className = 'flex justify-center md:justify-end items-center w-full  md:w-[45%] '>
                    <div className = 'w-[80%] md:w-[87%] h-full lg:w-[88%] xl:w-[64%] relative '>
                          <img src= {beneefitimage} alt="" className = 'w-full h-full object-cover  '/>
                     <div className = 'w-[18%] absolute top-[13%] left-[-15%]   '>
                        <img src= {benearrow} alt="" className = 'w-full' />
                    </div>
                    </div>
                </section>
                </section>
            </section>

            {/*  */}
            <section className = 'border-b-1 border-[#E4E4E4]'>
            <section className = 'container w-11/12 max-w-8xl mx-auto '>
                <section className = 'py-6 flex flex-col md:flex-row  gap-y-8 justify-between items-center'>
                    <div className = 'flex flex-col text-center'>
                        <div className = 'flex gap-1 items-center'>
                            <h2 className = 'font-medium text-[#3A3A3A] text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]'>500k</h2>
                            <span className  = 'font-medium text-[27px] text-[#3A3A3A]'>+</span>
                        </div>
                        <p className = ' text-center font-normal text-[#808080] text-base '>Reviews</p>
                    </div>
                    <div className = 'flex flex-col text-center'>
                        <div className = 'flex gap-1 items-center mx-auto'>
                            <h2 className = 'font-medium text-[#3A3A3A] text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]'>300k</h2>
                            <span className  = 'font-medium text-[27px] text-[#3A3A3A]'>+</span>
                        </div>
                        <p className = ' text-center font-normal text-[#808080] text-base '>Communities Serverd</p>
                    </div>
                    <div className = 'flex flex-col text-center'>
                        <div className = 'flex gap-1 items-center mx-auto'>
                            <h2 className = 'font-medium text-[#3A3A3A] text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]'>125k</h2>
                            <span className  = 'font-medium text-[27px] text-[#3A3A3A]'>+</span>
                        </div>
                        <p className = ' text-center font-normal text-[#808080] text-base '>Successful Claims</p>
                    </div>
                    <div className = 'flex flex-col text-center'>
                        <div className = 'flex gap-1 items-center mx-auto'>
                            <h2 className = 'font-medium text-[#3A3A3A] text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]'>329k</h2>
                            <span className  = 'font-medium text-[27px] text-[#3A3A3A]'>+</span>
                        </div>
                        <p className = ' text-center font-normal text-[#808080] text-base '>Satisfied Customer</p>
                    </div>
                </section>
            </section>
            </section>
        </>
    )
}

export default Benefit
