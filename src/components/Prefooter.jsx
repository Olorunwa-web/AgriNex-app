import React from 'react'
import frame from '../assets/Frame 40.png';
import arrowright from '../assets/arrow-right.svg';


const Prefooter = () => {
    return (
        <>
           <section className = 'py-8'>
              <section className = 'w-11/12 max-w-8xl mx-auto'>
                <section className ="bg-no-repeat bg-cover  w-full h-full  flex justify-center items-center py-20 md:py- md:py-30 rounded-[52px]"  style={{ backgroundImage: `url(${frame})` }} >
                    <section className = 'flex flex-col gap-6'>
                        <div>
                           <h1 className = 'text-center w-full text-[1.5rem] lg:w-[630px] font-bold lg:text-[2.4rem] text-white  '>Join the Agricultural Revolution</h1>
                           <h1 className = 'text-center font-bold text-[1.5rem] lg:text-[2.3rem] text-white'>Today!</h1>
                        </div>
                        <div className = 'text-center mx-auto relative flex w-[90%] md:w-[85%] '>
                            <input type="email" name="" id="" placeholder = "Email address" className = 'w-full bg-white py-3 px-4 md:px-6 rounded-l-[32px] outline-none font-medium text-[1rem] lg:text-[1.3rem] md:text-[1.1rem]  text-[#808080]  '/>
                            <button className = 'flex items-center justify-center gap-1 bg-[#2E6B31] rounded-r-[32px] pl-5 md:pl-6 pr-5 md:pr-7 py-3'><span className = 'font-semibold text-[1rem] md:text-[1.2rem] text-white'>Subscribe</span><img src= {arrowright} alt="" className = 'w-[20px]'/></button>
                        </div>
                    </section>
                </section>
              </section>
           </section>
        </>
    )
}

export default Prefooter
