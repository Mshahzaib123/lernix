import { Link, useNavigate } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

import chatIcon from '../../assets/chat-icon.svg';
import banner3 from '../../assets/banner3.webp';
import shape1 from '../../assets/banner-widget-shape1.webp';
import shape2 from '../../assets/banner-widget-shape2.webp';
import shape15 from '../../assets/shape15.svg';
import shap24 from '../../assets/shape24.webp';

const HeroSec3 = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contact-us")
    }
    return (
        <section className="relative bg-black md:pt-[100px] pt-28 2xl:before:block before:hidden before:content-[''] before:absolute before:top-0 before:right-0 before:w-[616px] before:h-[616px] before:bg-blue100 before:rounded-full before:blur-[277px]">
            <div className="container">
                <div className="relative z-[2] flex gap-x-6 lg:items-center lg:flex-row flex-col">
                    <div className="lg:w-1/2">
                        <SectionTitle
                            subtitle="Online Education Website"
                            title="Innovate With Digital"
                            highlightedText="Expertise"
                            headingColor="text-white"
                            headingLevel='h1'
                        />
                        <TitleComponent size='extra-large-medium' className='lg:mt-6 lg:mb-9 my-6 text-white'>Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip</TitleComponent>
                        <div className="flex items-center md:gap-10 gap-6">
                            <ThemeButton variant="split" theme="secondary2" text="Enroll Now" onClick={handleClick} />
                            <Link to="#" className="flex justify-center items-center 2xl:w-16 2xl:h-16 w-12 h-12 bg-whiteShade rounded-full duration-300 group hover:bg-primary">
                                <Play className='lg:text-3xl text-primary duration-300 group-hover:text-whiteShade ' size={28} weight='fill' />
                            </Link>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img className='max-w-[480px] w-full ml-auto' src={banner3} alt="hero-image" />
                        <div className="flex justify-between items-center xl:gap-x-4 gap-x-2.5 absolute z-[2] right-0 bottom-4 md:p-5 p-4 bg-white shadow-boxShadow2 rounded-lg duration-300 after:content-[''] after:absolute after:top-0 after:left-0 after:-z-[1] after:w-1 after:h-full after:bg-primary after:rounded-tl-[10px] after:rounded-bl-[10px] after:duration-500 group hover:after:w-full hover:after:rounded-lg">
                            <div>
                                <TitleComponent size='extra-large-medium' className='text-lg text-black duration-300 group-hover:text-white'>Chat with a mentor</TitleComponent>
                                <TitleComponent size='base-medium' className='text-sm text-bodyColor duration-300 group-hover:text-white'>Find your mentor here</TitleComponent>
                            </div>
                            <div className="flex justify-center items-center xl:w-16 xl:h-16 w-14 h-14 bg-gradient rounded-full">
                                <img src={chatIcon} alt="Chat" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute right-0 bottom-0 2xl:max-w-full lg:max-w-[600px]' src={shape1} alt="" />
            <img className='absolute right-0 bottom-0 2xl:max-w-full lg:max-w-[500px]' src={shape2} alt="" />
            <img className="absolute top-[87px] left-24 2xl:max-w-full max-w-16 lg:block hidden" src={shape15} alt="" />
            <div className="absolute 2xl:top-14 2xl:right-48 top-24 right-32 2xl:animate-moveBounce w-2.5 h-2.5 bg-gradient rounded-full lg:block hidden" />
            <div className="absolute top-[205px] right-24 w-2 h-2 rounded-full bg-primary animate-moveBg lg:block hidden" />
            <div className="absolute left-16 2xl:bottom-[340px] xl:bottom-[300px] bottom-[340px] w-2.5 h-2.5 rounded-full bg-gradient animate-moveBg lg:block hidden" />
            <div className="absolute left-40 2xl:bottom-56 bottom-20 w-2 h-2 rounded-full bg-primary 2xl:animate-moveBounce lg:block hidden" />
            <img className="absolute 2xl:top-[134px] 2xl:left-[643px] top-[120px] left-[340px] 2xl:max-w-full max-w-24 animate-rotateMe2 lg:block hidden" src={shap24} alt="" />
        </section>
    )
}

export default HeroSec3
