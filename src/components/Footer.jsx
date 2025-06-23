import React from 'react'
import { Link } from 'react-router-dom';
import agricnex from '../assets/AgriNex (3).svg';
import twitter from '../assets/svg.fs-xl.svg';
import ig from '../assets/svg.fs-xl (1).svg';
import facebook from '../assets/svg.fs-xl (2).svg';



const Footer = () => {
    return (
        <>
          <section  className = 'bg-[#2E6B31] pt-10 mt-10'>
            <section className = 'container mx-auto px-4 md:px-8'>
                  <section className = 'flex flex-col md:flex-row justify-between gap-10  border-b-[1.4px] border-[#CCCCCC] py-7'>
                    <div className = 'w-full md:w-[35%] lg:w-[40%] xl:w-[35%]  flex flex-col gap-y-5 md:gap-y-10 borde '>
                        <div className = 'w-[110px]'>
                            <img src= {agricnex} alt="" className = 'w-full'/>
                        </div>
                        <div className = 'w-[90%] md:w-full lg:w-[380px] '>
                            <p className = 'font-normal text-[#E4E4E4] text-[1rem]'>We drive innovation to support farmers, enhance food security and grow sustainable agribusiness across Africa</p>
                        </div>
                        <div className = 'flex flex-col gap-3'>
                            <span className = 'font-normal text-[#E4E4E4] text-[1rem] '>Follow us on</span>
                            <div className = 'flex gap-4'>
                                <img src= {twitter} alt=""/>
                                <img src= {ig} alt=""/>
                                <img src= {facebook} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className = 'w-full md:w-[24%] lg:w-[22%] xl:w-[19%] borde flex flex-col gap-5'>
                        <div>
                            <h4 className = 'font-medium text-[1.2rem] text-white'>Quick links</h4>
                        </div>
                        <div className = 'flex flex-col gap-4'>
                           <Link to = '/' className="font-normal text-base text-white hover:underline">
                              Home
                           </Link>
                           <Link to = '/aboutus' className="font-normal text-base text-white hover:underline">
                              About Us
                           </Link>
                           <Link to = '#' onClick={(e) => e.preventDefault()} className="font-normal text-base text-white cursor-not-allowed pointer-events-none">
                              Our Resources
                           </Link>
                           <Link to = '/contactus' className="font-normal text-base text-white hover:underline">
                              Contact Us
                           </Link>
                        </div>
                    </div>
                    <div className = 'w-full md:w-[24%] lg:w-[28%] xl:w-[22%] borde flex flex-col gap-5'>
                        <div>
                            <h4 className = 'font-medium text-[1.2rem] text-white'>Help</h4>
                        </div>
                        <div className = 'flex flex-col gap-4'>
                           <Link to = '#' onClick={(e) => e.preventDefault()} className="font-normal text-base text-white cursor-not-allowed pointer-events-none">
                              FAQs
                           </Link>
                           <Link to = '#' onClick={(e) => e.preventDefault()} className="font-normal text-base text-white cursor-not-allowed pointer-events-none">
                              Terms & Conditions
                           </Link>
                           <Link to = '#' onClick={(e) => e.preventDefault()} className="font-normal text-base text-white cursor-not-allowed pointer-events-none">
                              Privacy
                           </Link>
                           <Link to = '#' onClick={(e) => e.preventDefault()} className="font-normal text-base text-white cursor-not-allowed pointer-events-none">
                              How it Works
                           </Link>
                        </div>
                    </div>
                 </section>
                 <div className = 'flex gap-2 items-center justify-center py-7'>
                    <span className = 'text-[#E4E4E4] text-[24px]'>&copy;</span>
                    <span className = 'font-normal text-[1rem] text-[#E4E4E4] '>Copyright AgriNex 2025 All right reserved</span> 
                 </div>
            </section>
          </section>
        </>
    )
}

export default Footer
