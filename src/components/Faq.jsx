import React, {useState} from 'react'
import { faqaccords } from '../data';
import arrorwleft from '../assets/arrow-left.svg'
import arrorwleftgreen from '../assets/arrow-left (2).svg';


const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };


    return (
        <>
            <section className = 'container mx-auto px-4 md:px-8 '>
                <section>
                   <p className = 'text-center font-normal text-[#808080] text-base  mb-1'>NEED HELP?</p>
                   <h1 className = 'text-center text-[1.4rem] md:text-[1.7rem] lg:text-[1.7rem] font-bold mb-4 text-[#0D0D0D]'>FAQs</h1>
                   <section className = 'my-10'>
                   <section className = 'w-full flex flex-col gap-4'>
                       {faqaccords.map((faqs, index) => {
                           return (
                           <div key = {faqs.id} onClick={() => toggleAccordion(index)} className={` border-b-1 border-[#E4E4E4]  ${activeIndex === index ? 'border-b-1 border-[#E4E4E4] pb-2 md:pb-0' : 'py-4'}`}>
                               <div>
                                   <div className = 'flex justify-between items-center'>
                                      <h1 className={`font-semibold md:text-[1.3rem] text-[1.2rem] ${activeIndex === index ? 'text-[#4CAF50]' : 'text-[#0D0D0D]'}`} >{faqs.title}</h1>
                                      <img src= {activeIndex === index ? arrorwleftgreen : arrorwleft } alt="" className = 'w-[30px] '/>
                                  </div>
                                  
                                  <div 
                                    className={`overflow-hidden transition-all duration-300 w-full md:w-[90%]  ${
                                        activeIndex === index ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                                      }`}
                                  >
                                      <p className = ' font-normal text-base text-[#808080]'>{faqs.content}</p>
                                  </div>
                               </div>
                           </div>
                           )
                       })}
                   </section>
                   </section>
                </section>
            </section>
        </>
    )
}

export default Faq
