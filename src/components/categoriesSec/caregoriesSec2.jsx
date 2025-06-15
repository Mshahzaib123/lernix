import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import { CategoryData } from '../../Data';
import CategoryCard from './categoryCard';

import 'swiper/swiper-bundle.css';

const CategoriesSec2 = () => {
    let categoryData = CategoryData.filter(item => item.heading.length <= 20);
    categoryData = categoryData.concat(categoryData);
    return (
        <section className="xl:m-0 md:mx-5">
            <div className="container">
                <div className="2xl:p-12 md:p-12 p-6 bg-whiteShade rounded-xl shadow-boxShadow -translate-y-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1199: {
                                slidesPerView: 4,
                            },

                        }}
                        className='swiper'
                    >
                        {categoryData.map((data, index) => {
                            const bgColor = index % 2 === 0 ? 'lightPink100' : 'lightGreen';
                            return (
                                <SwiperSlide className='swiper-slide' key={index}>
                                    <CategoryCard data={data} bgColor={bgColor} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="swiper-button-main max-md:mt-8 max-md:flex max-md:justify-center max-md:items-center max-md:gap-x-6">
                        <div className="swiper-button-next absolute max-md:relative md:-right-5 right-0 order-1 flex justify-center items-center w-10 h-10 rounded-full bg-grey100 after:content-[none] duration-300 group hover:bg-primary">
                            <ArrowRight className='!w-auto !h-auto text-bodyColor duration-300 group-hover:text-whiteShade' weight='bold' size={18} />
                        </div>
                        <div className="swiper-button-prev absolute max-md:relative md:-left-5 left-0 flex justify-center items-center w-10 h-10 rounded-full bg-grey100 after:content-[none] duration-300 group hover:bg-primary">
                            <ArrowLeft className='!w-auto !h-auto text-bodyColor duration-300 group-hover:text-whiteShade' weight='bold' size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSec2
