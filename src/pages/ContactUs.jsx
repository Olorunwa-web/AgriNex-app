import React from 'react'
import contactback from '../assets/image 1.png'




const ContactUs = () => {
    return (
        <>
             <section className ="bg-cover no py-28 lg:py-35 xl:py-50 h-full max-h-full" style = {{ backgroundImage: `url(${contactback})`}}>
                <section className = 'w-11/12 max-w-8xl mx-auto'>
                    <h1 className = 'mb-3 font-bold text-white text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.7rem]'>Contact Us</h1>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>We'd love to hear from you!</p>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>Whether you have questions about our services, need support, or just want to share your feedback - we're hereto help.</p>
                </section>
            </section>
        </>
    )
}

export default ContactUs
