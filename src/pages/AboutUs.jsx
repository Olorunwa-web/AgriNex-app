import React from 'react'
import peoplebackground from '../assets/People with pots in glasshouse.png';
import { aboutsec } from '../data'
import image1 from '../assets/Download free image of Harvesting organic plant smile_  by Praew about background, plant, face, sky, and fruit 13148319 3.png';
import image2 from '../assets/Un homme africain récolte des légumes_ _ Image générée à base d’IA 1.png';
import image3 from '../assets/Blog 1.png';
import image4 from '../assets/Frame 1171279034.png';
import Swipes from '../components/Swipes';
import image5 from '../assets/Blog 1 (2).png';
import image6 from '../assets/Farmer Using A Robotic Weed Control System Wallpaper _ Premium AI-generated image 1 (3).png';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';





const aboutimages = [
    {
        id: 1,
        image:image1,
    },
    {
        id: 2,
        image:image2,
    },
    {
        id: 3,
        image:image3,
    },
    {
        id: 4,
        image:image4,
    },
    {
        id: 5,
        image:image1,
    },
]



const inspire = [
    {
        id: 1,
        title: '"Our Mission"',
        words: 'Our mission is to make farming more efficient, profitable, and environmentally friendly and revolutionize agriculture by providing farmers with the tools, resources, and market access they need to thrive in a digital world.',
        image: image6,
    },
    {
        id: 2,
        title: '"Our Vision"',
        words: 'We envision a future where agriculture is tech-driven, sustainable,and accessible to everyone. By bridging between technology and farming. we thrive to create a thriving agricultural ecosystem.',
        image: image5,
    },
]


const AboutUs = () => {
    return (
        <>
            <section className ="bg-cover py-28  lg:py-33 xl:py-37 h-full max-h-full" style = {{ backgroundImage: `url(${peoplebackground})`}}>
                <section className = 'w-11/12 max-w-8xl mx-auto'>
                    <h1 className = 'mb-3 font-bold text-white text-[2.2rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.7rem]'>About Us</h1>
                    <p className = ' w-full md:w-[650px] lg:w-[700px] font-normal text-white text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]'>We blend technology with farming to create smart, sustainable solutions for modern agriculture. Our mission is to help farmer grow efficiently and imapctfully.</p>
                </section>
            </section>

            {/*  */}

            <section className = 'w-11/12 max-w-8xl mx-auto'>
                <section className = 'py-4 flex flex-col md:flex-row gap-y-7 md:gap-10 justify-between items-center'>
                    <div className = 'w-full text-center md:text-left md:w-1/2 lg:w-[60%] xl:w-[65%] '>
                        <div className = 'w-full lg:w-[450px]' >
                          <span className = 'font-semibold text-[#4CAF50] text-[1.3rem]'>AgriNex </span>
                          <span className = 'font-medium text-base text-black '>is a smart agriculture platform designed to connect farmers, agribusiness, and consumers through innovation digital solutions. We leverage technology to enhance productivity, market access, and sustainability in the agricultural sector.</span>
                        </div>
                    </div>
                    <div className = 'w-full lg:w-[40%] xl:w-[35%] md:w-1/2 flex justify-around md:justify-between'>
                        {aboutsec.map((about)=> {
                            return (
                                <div key = {about.id} className = 'flex flex-col gap- items-center'>
                                    <div className = 'w-[39px]'>
                                        <img src= {about.image}  alt="" className = 'w-full'/>
                                    </div>
                                    <div className = 'flex gap-1 items-center'>
                                        <h2 className = 'font-medium text-[#3A3A3A] text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]'>{about.number}</h2>
                                        <span className  = 'font-medium text-[27px] text-[#3A3A3A]'>+</span>
                                    </div>
                                    <div>
                                        <p className = ' text-center font-normal text-[#808080] text-base'>{about.board}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </section>
            </section>

            {/*  */}

            <section className = 'bg-[#2E6B31]  '>
                <section className = 'w-11/12 max-w-8xl mx-auto'>
                    <section className = 'py-8 md:py-5 flex flex-col gap-y-6 justify-between items-center md:flex-row '>
                        <div>
                          <h1 className = 'font-bold text-white text-[33px] md:text-[40px] lg:text-[3.2rem] xl:text-[3.4rem]'>Our Services:</h1>
                        </div>
                        <div className = 'w-full md:w-[350px] lg:w-[450px] flex justify-end '>
                          <div className = 'flex flex-col'>
                             <span className = 'font-medium text-white text-base'>At AgriNex, we connect farmer with technology to improve productivity and market access.</span>
                             <span className = 'font-medium text-white text-base' ><span className = 'font-semibold text-white text-[1.1rem]'>We offer:</span> Smart Farm Tools,Real-time Market Updates, Training & Support and Direct Linkage to Buyers.</span>
                          </div>
                        </div>
                    </section>
                </section>
            </section>

            {/*  */}

            <section>
                <section className = 'w-11/12 max-w-8xl mx-auto my-8'>
                    <section className = 'py-4  flex flex-col md:flex-row gap-x-4  justify-between'>
                        <div className = 'w-full text-center md:text-left md:w-1/2 lg:w-full xl:w-1/2'>
                           <p className = 'font-normal text-[#808080] text-base mb-1'>AGRICULTURE-THEMED</p>
                           <h1 className = 'text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>Our Story</h1>
                           <h1 className = 'mt-[-9px] w-full xl:w-[500px] text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>Innovation, Sustainability, Transparency & Empowerment</h1>
                        </div>
                        <div className = 'w-full text-center md:text-left md:w-1/2 lg:w-[770px] xl:w-[450px] '>
                            <p className = 'font-medium text-black text-base'>AgriNex was born from a simple yet powerful idea: to bridge the gap between farmers and technology. We, inspired by the struggles of small and large-scale farmers, saw the challenges of unpredictable weather, limited market access, and outdated farming practices. We knew the technology could be key to transforming agriculture.</p>
                        </div>
                    </section>
                    <div className = 'py-5 mb-7 w-full flex flex-wrap gap-4 md:gap-0 justify-center md:justify-between'>
                        {aboutimages.map((img)=> {
                            return (
                               <div key = {img.id} className = 'w-[24%] md:w-[16%] '>
                                   <img src= {img.image} alt="" className = 'w-full'/>
                               </div>
                            )
                       })}
                    </div>
                </section>

                {/*  */}

                <section className = 'py-12' >
                   <p className = 'text-center font-normal text-[#808080] text-base  mb-1'>AGRICULTURE-FOCUSED</p>
                   <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>What We Offer</h1>
                   <Swipes/>
                </section>

                {/*  */}

                <section className = 'w-11/12 max-w-8xl mx-auto'>
                      <p className = 'text-center font-normal text-[#808080] text-base mb-1'>INSPIRATION</p>
                      <div className = 'w-full flex flex-col justify-center gap-x-10 gap-y-6 my-8 md:flex-row'>
                          {inspire.map((inp) =>{
                              return (
                             <div key = {inp.id} className = 'w-full md xl:w-[45%] flex flex-col '>
                                 <div className = 'bg-[#2E6B31] p-4 w-full rounded-t-[30px] text-center'>
                                    <h1 className = 'font-semibold text-white text-[1.4rem] md:text-[1.6rem] lg:text-[1.9rem]'>{inp.title}</h1>
                                    <p className = 'my-2 mx-auto lg:w-[400px] xl:w-[600px] font-medium text-white text-base'>{inp.words}</p>
                                 </div>
                                 <div className = 'w-full h-full flex-1 mt-[-1px]'>
                                   <img src= {inp.image} alt="" className = 'w-full object-fit h-full '/>
                                </div>
                              </div>
                              )
                          })}
                      </div>
                </section>

                {/*  */}

                <section>
                    <Testimonial/>
                    <Faq/>
                </section>
                <div className = 'text-center py-1'>
                     <span className = ' font-normal text-base text-[#808080]'>if your question has not been answered, please send it to us at info@agrinex.com</span>
                </div>
            </section>
        </>
    )
}

export default AboutUs
