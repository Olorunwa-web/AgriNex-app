import React, { useRef } from 'react'
import { test } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Ellipse from '../assets/Ellipse 1 (1).png';
import rate from '../assets/Vector (3).svg';



const Swipes2 = () => {

    const swiperRef = useRef(null);

    const goToIndex = (index) => {
        if (swiperRef.current) swiperRef.current.slideTo(index);
      };


    return (
        <>
            <section className = 'w-full my-8  '>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    direction= {'horizontal'}
                    slidesPerView= {3}
                    spaceBetween= {65}
                    mousewheel={true}
                    freeMode={true}
                    // centeredSlides={false}
                    modules={[Mousewheel, FreeMode]}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },

                        375: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },

                        640: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },

                        768: {
                          slidesPerView: 2,
                          spaceBetween: 45,
                        },

                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 45,
                        },

                        1280: {
                          slidesPerView: 3,
                          spaceBetween: 65,
                        },
                      }}
                    className="!w-full  "
                    >
                        {test.map((tes, index) => {
                            return (
                                    <SwiperSlide key = {tes.id} className = {` border-1 border-[#0000001A] rounded-[8px] p-5  ${index === 0 ? "ml-8 xl:ml-14" : index === 5 ? " " : " "}`}>
                                        <div className = ''>
                                            <div>
                                                <h1 className = 'text-[1.1rem] text-[#0D0D0D] font-semibold'>{tes.title}</h1>
                                                <p className = 'my-3 text-[1rem] text-[#666666] font-normal'>{tes.words}</p>
                                            </div>
                                            <div className = 'flex justify-between items-center'>
                                                <div className = 'flex gap-2 items-center'>
                                                    <img src= {Ellipse} alt="" className = 'w-[45px] h-[45px] '/>
                                                    <div>
                                                        <h2 className  = 'text-[1.1rem] text-[#0D0D0D] font-semibold'>Adebayo K.</h2>
                                                        <p className = 'text-[1rem] text-[#808080] font-norma;'>Maize Farmer</p>
                                                    </div>
                                                </div>
                                                <div className = 'flex gap-2 items-center'>
                                                    <img src= {rate} alt="" className = 'w-[20px] h-[19px] '/>
                                                    <span className = 'text-[1.1rem] text-[#0D0D0D] font-normal'>5.4</span>
                                                </div>
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

export default Swipes2
