import React from 'react'
import { motion } from 'framer-motion';
import { uppermarquee } from '../data';
import { lowermarquee } from '../data';
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const Marquee = () => {

    return (
        <>
        <div className = 'w-full '>
          <Splide  options = {{  type: "loop",
          perPage: 5,
          gap: "4rem",
          speed: 7000, 
          pauseOnHover: false,
          arrows: false,
          pagination: false,
          drag: false,
          autoScroll: {
            speed: 3, 
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            autoStart: true
          },
          breakpoints: {
            1024: {
              perPage: 5,
              autoScroll: {
                speed: 3,
              },
              gap: ''
            },
            320: {
              perPage: 2,
              perMove:1,
              autoScroll: {
                speed: 2,
              },
              gap: "4rem"
            },
            375: {
              perPage: 2,
              perMove:1,
              autoScroll: {
                speed: 2,
              },
              gap: ""
            },
            768: {
              perPage: 4,
              autoScroll: {
                speed: 2,
              },
            },
          },
           }} 
           
           extensions={{ AutoScroll }}
           className = ''>
            
                {uppermarquee.map((img) => {
                  return (
                     <SplideSlide key = {img.id} className = ''>
                         <div className = 'xl:w-[7rem] lg:w-[6rem] w-[5.5rem] mx-auto py-4 '>
                            <img src= {img.image} alt="" className = 'w-full h-full'/>
                         </div>
                     </SplideSlide>
                   )
                })}
              
          </Splide>
        </div>
        {/* <section className =''>
            <section className = 'overflow-hidden flex border '>
                <motion.section
                 initial = {{ x: 0}}
                 animate = {{ x: "-100%"}}
                 transition = {{ duration: 60, repeat: Infinity, ease: 'linear'}}
                 className = "flex flex-shrink-0"
                >
                    {uppermarquee.map((images) => {
                        return (
                            <img src= {images.image} key = {images.id} className = 'w-40 h-20 pr-15 '  alt=""/>
                        )
                    })}

                </motion.section>
                <motion.section
                 initial = {{ x: 0}}
                 animate = {{ x: "-100%"}}
                 transition = {{ duration: 60, repeat: Infinity, ease: 'linear'}}
                 className = "flex flex-shrink-0"
                >
                    {uppermarquee.map((images) => {
                        return (
                           <img src= {images.image} key = {images.id} className = 'w-40 h-20 pr-15' alt=""/>
                        )
                    })}

                </motion.section>
            </section>
        </section> */}
        </>
    )
}

export default Marquee
