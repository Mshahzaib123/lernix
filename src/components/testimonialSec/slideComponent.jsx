import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import { testimonialData } from '../../Data';

import StudentSlide from './studentSlide';

import "swiper/swiper-bundle.css";

const SliderComponenet = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className='2xs:pb-0 pb-16'
        >
            {
                testimonialData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <StudentSlide data={data} />
                    </SwiperSlide>
                ))
            }

            <div className="absolute z-10 2xs:right-0 bottom-0 2xs:left-0 left-1/2 right-auto 2xs:translate-x-0 -translate-x-1/2  flex items-center flex-row-reverse gap-x-6">
                <div className="swiper-button-next relative flex justify-center items-center 2xl:w-14 2xl:h-14 md:w-12 md:h-12 w-10 h-10 border border-solid border-bodyColor2 rounded duration-300 group after:content-[none] hover:bg-primary hover:border-transparent">
                    <ArrowRight className='md:!w-[24px] !w-4 md:!h-[24px] !h-4 text-bodyColor2 duration-300 group-hover:text-white' weight='bold' />
                </div>
                <div className="swiper-button-prev relative left-0 flex justify-center items-center 2xl:w-14 2xl:h-14 md:w-12 md:h-12 w-10 h-10 border border-solid border-bodyColor2 rounded duration-300 group hover:bg-primary hover:border-transparent after:content-[none]">
                    <ArrowLeft className='md:!w-[24px] !w-4 md:!h-[24px] !h-4 text-bodyColor2 duration-300 group-hover:text-white' weight='bold' />
                </div>
            </div>
        </Swiper>
    )
}

export default SliderComponenet
