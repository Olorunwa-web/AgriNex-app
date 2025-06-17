import React from 'react'
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <>
            <section className = 'w-full min-h-screen px-5 md:px-0 flex justify-center items-center'> 
                <section className = 'flex flex-col '>
                    <div className = 'text-center'>
                        <h1 className = 'font-bold text-[#4CAF50] text-[70px] md:text-[170px]'>404</h1>
                    </div>
                    <div className = 'flex flex-col gap-y-3'>
                      <div className = 'text-center' >
                        <h3 className = 'font-bold text-[20px] md:text-[27px] text-[#0D0D0D]'>Ooops!"</h3>
                        <h3 className = 'font-bold text-[20px] md:text-[27px] text-[#0D0D0D]'>Page Not Found</h3>
                      </div>
                      <div className ='text-center' >
                        <p className = 'font-semibold text-[15px] md:text-[18px] text-[#0D0D0D]'>This page doesn't exist or has been removed.</p>
                        <p className = 'font-semibold  text-[15px] md:text-[18px] text-[#0D0D0D]'>We suggest you go back</p>
                      </div>
                    </div>
                    <div className = 'text-center mt-8'>
                        <button className = 'bg-[#4CAF50] rounded-[56px] h-[50px] md:h-[60px] px-[27px] py-[10px] font-semibold  text-[16px] md:text-[20px] text-white'>Go Back</button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Error
