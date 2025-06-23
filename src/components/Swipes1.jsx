import React, { useRef } from 'react'
import { swipeImage } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';




const Swipes1 = () => {


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
                    slidesPerView= {4}
                    spaceBetween= {15}
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
                        {swipeImage.map((omo, index) => {
                            return (
                                    <SwiperSlide key = {omo.id} className = {` border-1 border-[#D5D4D4] rounded-[8px]   ${index === 0 ? "ml- xl:ml-14" : index === 5 ? " mr-40" : ""}`}>
                                        <div className = ''>
                                           <div>
                                             <img src= {omo.image} alt="" className = 'w-full rounded-tr-[8px] rounded-tl-[8px] ' />
                                           </div>
                                           <div className = 'p-4'>
                                              <h1 className = 'text-base text-[#0D0D0D] font-semibold '>{omo.title}</h1>
                                              <p className = ' w-full md:w-[90%] mt-3 text-base text-[#666666] font-normal '>{omo.words}</p>
                                              <div className = 'mt-6 mb-1'>
                                                <button className = 'border-1 border-[#4CAF50] rounded-[56px] py-2 px-6 font-medium text-base text-[#4CAF50] '>Details</button>
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

export default Swipes1
