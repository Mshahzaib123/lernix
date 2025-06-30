import { Link, useNavigate } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';
import { userProfileData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

import banner2 from '../../assets/banner2.webp';
import bannerWrapBg from '../../assets/banner-warp-bg-shape-2.webp';
import bannerWrapLineShape from '../../assets/banner-warp-line-shape.svg';
import bannerWrapLineRound from '../../assets/banner-warp-line-round.webp';

const HeroSec2 = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/about")
    }
    return (
        <section className="max-w-[1680px] rounded-lg bg-bannerWrapBg bg-no-repeat bg-cover bg-center mx-auto lg:pt-8 lg:pb-56 md:pt-[90px] md:pb-[180px] pt-[70px] pb-40">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center gap-y-6">
                    <div className="xl:pr-20 lg:mt-14 lg:pr-10 mt-0">
                        <SectionTitle
                            subtitle="Online Education Website"
                            title="Empower Your Future, Learn Digital"
                            highlightedText="Skills"
                            headingColor="text-white"
                            headingLevel='h1'
                            className='text-whiteShade'
                        />
                        <TitleComponent size='extra-large-medium' className='text-whiteShade lg:mt-6 lg:mb-9 my-6'>Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip</TitleComponent>

                        <div className="flex items-center md:gap-10 gap-6 md:mt-9 mt-6">
                            <ThemeButton variant="split" theme="secondary2" text="Enroll Now" onClick={handleClick} />
                            <Link to="#" className="flex justify-center items-center lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] bg-whiteShade rounded-full duration-300 group hover:bg-primary">
                                <Play className='lg:text-[28px] text-2xl text-primary duration-300 group-hover:text-whiteShade' weight='fill' />
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-[1] lg:ml-10 max-lg:flex max-lg:justify-center">
                            <img className="max-w-full max-sm:w-[400px] h-auto" src={banner2} alt="" />
                        </div>
                        <div className="absolute left-0 bottom-0 right-0 flex justify-center">
                            <img src={bannerWrapBg} alt="" />
                        </div>
                        <div className="absolute bottom-0 lg:-left-[30px] lg:block hidden">
                            <img className="max-md:h-[360px]" src={bannerWrapLineShape} alt="" />
                        </div>
                        <div className="absolute top-1/2 lg:-left-[33px] -translate-y-1/2 animate-moveBounce lg:block hidden">
                            <img src={bannerWrapLineRound} alt="" />
                        </div>
                        <div className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 z-[2]">
                            <div className="inline-flex items-center justify-center 2xs:gap-5 gap-3.5 rounded-xl bg-whiteShade xl:py-[30px] xl:px-10 sm:py-5 sm:px-[30px] p-3.5 w-max">
                                <ul className="flex items-center">
                                    {userProfileData.slice(5, 9).map((item, index) => (
                                        <li key={index} className="first-ml-0 -ml-2.5 duration-300 hover:z-[4] hover:-translate-y-1.5">
                                            <img className="relative sm:w-[52px] sm:h-[52px] w-11 h-11 rounded-full object-cover border-2 border-solid border-whiteShade z-[2]" src={item.img} alt={item.text} />
                                        </li>
                                    ))}
                                </ul>
                                <div>
                                    <TitleComponent type='h4' className='text-black'>5,000+</TitleComponent>
                                    <TitleComponent size='base-medium' className='text-bodyColor lg:mt-2 mt-0'>Happy Students</TitleComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSec2
