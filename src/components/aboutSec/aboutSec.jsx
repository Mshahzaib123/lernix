import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import TitleComponent from '../titleComponent/titleComponent';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';

import aboutImg1 from '../../assets/about1.webp';
import aboutImg2 from '../../assets/about2.webp';
import aboutImg3 from '../../assets/about3.webp';
import profile6 from '../../assets/about4.webp';
import aboutShape1 from '../../assets/shape1.svg';
import aboutShape2 from '../../assets/shape2.svg';

const AboutSec = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <section className="relative lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12 after:content-[''] after:w-full after:h-[130%] after:bg-lightPink200 after:absolute after:top-0 after:left-0 after:-z-[1]">
            <div className="container">
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="relative lg:w-1/2">
                        <div className="flex gap-6 sm:flex-row flex-col">
                            <div className="sm:w-1/2 relative z-[2]">
                                <div className="sm:ml-10 mb-6">
                                    <img className="xl:max-w-56 lg:max-w-full w-full rounded-xl" src={aboutImg1} alt="" />
                                </div>
                                <div>
                                    <img className="xl:max-w-[264px] lg:max-w-full w-full rounded-xl" src={aboutImg2} alt="" />
                                </div>
                            </div>
                            <div className="relative sm:w-1/2 z-[2] flex flex-col justify-start">
                                <div className="sm:mt-12 mt-0 2xl:-ml-9 ml-0 mb-6">
                                    <img className="2xl:max-w-80 sm:max-w-full w-full rounded-xl" src={aboutImg3} alt="" />
                                </div>
                                <div className="flex justify-between items-center rounded-xl bg-gradient 2xl:py-6 2xl:px-10 xl:py-5 xl:px-9 py-4 px-5 2xl:-ml-9 2xl:mr-5 ml-0 mr-0 group">
                                    <div>
                                        <TitleComponent type='h2' className='text-whiteShade max-3xl:text-3xl'>15</TitleComponent>
                                        <TitleComponent size='large-medium' className='text-whiteShade'>years experience</TitleComponent>
                                    </div>
                                    <div className="cursor-pointer">
                                        <ArrowRight className='text-whiteShade -rotate-45 duration-300 group-hover:text-black group-hover:rotate-0' size={36} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="absolute top-5 2xl:-left-12 -left-2.5 animate-rotateMe2 sm:block hidden" src={aboutShape1} alt="About Shape" />
                        <img className="absolute -top-3 2xl:left-[308px] left-[395px] sm:block hidden animate-moveBg" src={aboutShape2} alt="About Shape" />
                    </div>
                    <div className="lg:w-1/2 2xl:ml-10 xl:ml-5 ml-0">
                        <SectionTitle
                            subtitle="About Learnix"
                            title="Discover Our Vision for Digital"
                            highlightedText="Education"
                            headingLevel="h2"
                            className='xl:mb-10 mb-6'
                        />
                        <TitleComponent size='large-medium' className='text-bodyColor mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</TitleComponent>
                        <TitleComponent type='h4' className='text-black 2xl:mt-9 2xl:mb-8 xl:mt-6 xl:mb-5 max-2xl:text-lg mt-5 mb-4'>OUR MISSIONS & VISIONS</TitleComponent>
                        <TitleComponent size='large-medium' className='text-bodyColor mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit</TitleComponent>
                        <TitleComponent size='large-medium' className='text-bodyColor mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit</TitleComponent>
                        <div className="flex items-center flex-wrap gap-y-6 gap-x-10 2xl:mt-10 mt-6">
                            <ThemeButton variant="split" theme="secondary" text="Learn More" onClick={handleClick} />
                            <div className="flex items-center gap-x-5">
                                <Link to="/">
                                    <img className="w-16 h-16 rounded-full" src={profile6} alt="Profile" />
                                </Link>
                                <div>
                                    <TitleComponent size='extra-large-medium' className='text-black'>Jason S. Ellis</TitleComponent>
                                    <TitleComponent size='base-medium' className='text-bodyColor mt-2'>CEO & Founder</TitleComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec
