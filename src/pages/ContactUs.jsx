import React from 'react'
import contactback from '../assets/image 1.png'
import Iframe from 'react-iframe'




const ContactUs = () => {
    return (
        <>
             <section className ="bg-cover md:py-40 py-28 lg:py-35 xl:py-50 h-full max-h-full" style = {{ backgroundImage: `url(${contactback})`}}>
                <section className = 'container w-11/12 max-w-8xl mx-auto'>
                    <h1 className = 'mb-3 font-bold text-white text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.7rem]'>Contact Us</h1>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>We'd love to hear from you!</p>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>Whether you have questions about our services, need support, or just want to share your feedback - we're hereto help.</p>
                </section>
            </section>

            {/*  */}
            <section className = 'container my-9 md:my-12  w-11/12 max-w-8xl mx-auto'>
              <section className = 'w-full  flex flex-col gap-6 md:gap-5 lg:gap-10 lg:flex-row gap-4'>
                <section className = 'w-full p-4 md:p-6 md:w-full lg:w-3/5 bg-[#EDF7EE] rounded-[20px] '>
                    <section>
                        <h1 className = 'mb-3 font-bold text-black text-[1.4rem] md:text-[1.5rem] lg:text-[1.8rem] '>Get in Touch</h1>
                        <form action="">
                            <div className = 'flex flex-col gap-5 md:flex-row justify-between'>
                              <div className = 'flex w-full flex-col gap-2'>
                                 <label htmlFor="" className = 'font-semibold text-black text-base'>Name</label>
                                 <input type="text" name="" id="" placeholder = 'Enter your Name' className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 outline-none text-base font-normal text-[#808080] px-4 '/> 
                              </div>
                              <div className = 'flex w-full flex-col gap-2' >
                                  <label htmlFor="" className = 'font-semibold text-black text-base'>Phone Number</label>
                                  <input type="tel" name="" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 outline-none text-base font-normal text-[#808080] px-4'/>
                              </div>
                            </div>
                            <div className = 'my-4 flex flex-col gap-2'>
                                <label htmlFor="" className = 'font-semibold text-black text-base'>Email</label>
                                <input type="email" name="" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 outline-none text-base font-normal text-[#808080] px-4'/>
                            </div>
                            <div className = 'my-4 flex flex-col gap-2'>
                                <label htmlFor="" className = 'font-semibold text-black text-base'>Your Message</label>
                                <textarea name="" id="" cols="30" rows="6" className = 'w-full px-4 resize-none bg-white border-1 border-[#808080] rounded-lg py-2 outline-none text-base font-normal text-[#808080]'></textarea>
                            </div>
                            <button className = 'mt-3 mb-1 w-full bg-[#4CAF50] rounded-full py-3 font-semibold  text-base text-white'>Send Message</button>
                        </form>
                    </section>
                </section>
                <section className = ' w-full md:w-full lg:w-2/5 flex flex-col  gap-4 justify-between'>
                  <section className = 'border-1  border-[#808080] rounded-[20px]'>
                    <h1 className = 'text-center py-2 font-bold text-black text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] border-b-1 border-[#808080] '>Contact Information</h1>
                      <div className = 'md:p-6 p-4 flex flex-col gap-6 '>
                          <div>
                              <p className = 'mb-2 font-semibold text-black text-base '>Phone</p>
                              <span className = 'font-medium text-base text-[#808080] '>+234-7065051731</span>
                          </div>
                          <div>
                              <p className = 'mb-2 font-semibold text-black text-base '>Address</p>
                              <span className = 'font-medium text-base text-[#808080] '>1, Ogunlesi Street, Off Awoyokun Bus-stop Onipan, Palmgroove, Lagos.</span>
                          </div>
                          <div>
                              <p className = 'mb-2 font-semibold text-black text-base '>Email</p>
                              <span className = 'font-medium text-base text-[#808080] '>info@agrinex.com</span>
                          </div>
                      </div>
                  </section>
                  <section className = 'border-1 border-[#808080] rounded-[20px]'>
                       <h1 className = 'text-center py-2 font-bold text-black text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] border-b-1 border-[#808080] '>Business Hours</h1>
                       <div className = 'md:p-6 p-4 flex justify-between'>
                           <div>
                              <p className = 'mb-2 font-semibold text-black text-base '>Mon. - Fri</p>
                              <span className = 'font-medium text-base text-[#808080] '>9am-8am</span>
                           </div>
                           <div>
                              <p className = 'mb-2 font-semibold text-black text-base '>Sat. - Sun</p>
                              <span className = 'font-medium text-base text-[#808080] '>12pm-8pm</span>
                           </div>
                       </div>
                  </section>
                 </section>
              </section>
            </section>

            {/*  */}

            <section className = 'container my-12 md:my-13  w-11/12 max-w-8xl mx-auto'>
                <div className = 'w-fu'>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.889869751438!2d3.3634445749952544!3d6.535590423022735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7a651735%3A0x32e2b349847a2298!2s1%20Ogunlesi%20St%2C%20off%20Awoyokun%20Street%2C%20Onipanu%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1750864268952!5m2!1sen!2sng"
                   width="100%"
                   height=""
                   id=""
                  className="w-full h-[25rem] md:h-[30rem] rounded-lg "
                  display="block"
                  position="relative"/>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.889869751438!2d3.3634445749952544!3d6.535590423022735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7a651735%3A0x32e2b349847a2298!2s1%20Ogunlesi%20St%2C%20off%20Awoyokun%20Street%2C%20Onipanu%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1750864268952!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen = '' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </section>
        </>
    )
}

export default ContactUs
