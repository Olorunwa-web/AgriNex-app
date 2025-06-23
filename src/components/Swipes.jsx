import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { aboutswipes } from '../data';




const Swipes = () => {
    return (

        <>
            <section className  = 'py-4'>
                <Swiper
                  direction= {'horizontal'}
                  slidesPerView= {4}
                  spaceBetween= {45}
                  mousewheel={true}
                  freeMode={true}
                  // centeredSlides={false}
                  modules={[Mousewheel, FreeMode]}
                  breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },

                      375: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },

                      640: {
                        slidesPerView: 2,
                        spaceBetween: 17,
                      },

                      768: {
                        slidesPerView: 2,
                        spaceBetween: 17,
                      },

                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 17,
                      },

                      1280: {
                        slidesPerView: 4,
                        spaceBetween: 17,
                      },
                    }}
                  className="!w-full bord "
                >
                    {aboutswipes.map((swip,index) => {
                        return (
                            <SwiperSlide key = {swip.id} className = {` ${index === 0 ? " xl:ml-14  ml-7" : index === 4 ? " mr-40" : ""}`}>
                                <div className = 'p-5 border-[2px] border-[#4CAF50] rounded-[30px] h-[175px] flex justify-center items-center'>
                                    <div className = ''>
                                       <div className = 'flex justify-center  '>
                                         <img src= {swip.image} alt="" className = ''/>
                                       </div>
                                       <h3 className = 'text-center text-[#0D0D0D] font-semibold text-[1.1rem] pt-2 pb-4'>{swip.title}</h3>
                                       <p className = 'text-center text-[#0D0D0D] font-semibold text-[1rem]'>{swip.word}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </section>
        </>
    )
}

export default Swipes
