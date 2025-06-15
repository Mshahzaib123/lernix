import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { partnerData } from '../../Data';

import "swiper/swiper-bundle.css";

const PartnerSec = () => {
    return (
        <section className="relative lg:pb-28 md:pb-[75px] pb-12 before:content-[''] before:absolute before:bg-black before:top-0 before:left-0 before:w-full before:h-full before:-z-[1]">
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        1199: {
                            slidesPerView: 5,
                        }
                    }}
                    className='mySwiper'
                >
                    {partnerData.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="flex justify-center items-center">
                                <img className="w-auto h-7" src={item.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PartnerSec