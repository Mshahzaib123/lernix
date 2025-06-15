import { Link, useNavigate } from 'react-router-dom';
import { Play, Star } from '@phosphor-icons/react';
import { userProfileData } from '../../Data';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import SectionTitle from '../sectionTitle/sectionTitle';

import heroImg from '../../assets/banner1.webp';
import udemyLogo from '../../assets/udemy.svg';
import userIcon from '../../assets/user-icon.svg';
import messageIcon from '../../assets/message-icon.svg';
import heroShape1 from '../../assets/banner-shape1.webp';
import heroShape4 from '../../assets/banner-shape4.webp';
import heroShape5 from '../../assets/banner-shape5.webp';
import heroShape6 from '../../assets/banner-shape6.webp';
import heroShape7 from '../../assets/banner-shape7.webp';
import heroShape8 from '../../assets/banner-shape8.webp';

const HeroSec = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/about")
    }
    return (
        <div className="relative bg-hero-bg1 bg-cover bg-no-repeat bg-center 2xl:pt-[165px] lg:pt-32 pt-36 pb-10">
            <div className="container">
                <div className="flex lg:flex-row flex-col gap-y-9">
                    <div className="lg:w-1/2 xl:pr-20 lg:pr-10 lg:mt-14 mt-0">
                        <SectionTitle subtitle="Online Education Website" title="Empower Your Future, Learn Digital" highlightedText="Skills" headingLevel='h1' />
                        <TitleComponent size='extra-large-medium' className='lg:mt-6 lg:mb-9 my-6 text-bodyColor'>Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip</TitleComponent>
                        <div className="flex items-center md:gap-10 gap-6">
                            <ThemeButton variant="split" theme="secondary" text="Enroll Now" onClick={handleClick} />
                            <Link to="#" className="flex justify-center items-center lg:w-16 lg:h-16 w-12 h-12 bg-whiteShade rounded-full duration-300 group hover:bg-black">
                                <Play className='lg:text-3xl text-primary duration-300 group-hover:text-whiteShade' size={28} weight='fill' />
                            </Link>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img className="relative z-[2]" src={heroImg} alt="Hero" />
                        <div className="inline-block md:absolute relative z-[2] md:top-72 top-0 right-0 md:mb-0 mb-3.5 p-3.5 rounded-lg bg-whiteShade shadow-boxShadow2 duration-300 hover:-translate-y-2.5">
                            <ul className="flex items-center gap-x-4">
                                <li className="flex items-center gap-1">
                                    <img src={udemyLogo} alt="Udemy LOGO" />
                                </li>
                                <li className="flex items-center gap-1">
                                    <TitleComponent size='large-bold' className='text-black'>4.9</TitleComponent>
                                    <Star className='text-yellow' size={16} weight='fill' />
                                </li>
                            </ul>
                        </div>
                        <div className="md:absolute relative z-[2] bottom-0 lg:-left-16 left-0 flex items-center flex-col md:mb-0 mb-6 p-5 rounded-lg bg-whiteShade shadow-boxShadow2 duration-300 group hover:-translate-y-2.5">
                            <div className="flex items-center justify-center w-[70px] h-[70px] bg-white100 rounded-full duration-300 group-hover:bg-primary">
                                <img className="duration-300 group-hover:text-white" src={userIcon} alt="User Icon" />
                            </div>
                            <TitleComponent size='extra-large-medium' className='uppercase tracking-[5px] mt-5 mb-2.5 text-black '>Students</TitleComponent>
                            <TitleComponent type="h4" className='text-black'>10K+</TitleComponent>
                            <ul className="flex justify-center items-center flex-wrap mt-3">
                                {userProfileData.slice(0, 5).map((item, index) => (
                                    <li className="first:ml-0 ml-[-10px] duration-300 group hover:-translate-y-1.5 hover:z-[4]" key={index}>
                                        <img className="relative z-[2] w-14 h-14 rounded-full border-2 border-solid border-whiteShade object-cover" src={item.img} alt={item.text} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between items-center xl:gap-x-4 gap-x-2.5 md:absolute relative z-[2] right-0 md:bottom-4 bottom-0 md:p-5 p-4 bg-white shadow-boxShadow2 rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:-z-[1] after:w-1 after:h-full after:bg-primary after:rounded-tl-lg after:rounded-bl-lg after:duration-500 duration-500 group hover:-translate-y-2.5 hover:after:w-full hover:after:rounded-lg">
                            <div>
                                <TitleComponent size='extra-large-medium' className='text-lg text-black duration-300 group-hover:text-white'>Chat with a mentor</TitleComponent>
                                <TitleComponent size='base-medium' className='text-sm text-bodyColor duration-300 group-hover:text-white'>Find your mentor here</TitleComponent>
                            </div>
                            <div className="flex justify-center items-center xl:w-16 xl:h-16 w-14 h-14 bg-gradient rounded-full">
                                <img src={messageIcon} alt="Chat" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute top-32 left-28 animate-zoomInOut lg:block hidden" src={heroShape1} alt="Banner Shape 1" />
            <div className="absolute 3xl:top-[300px] 2xl:left-14 left-96 top-44 xl:block hidden animate-moveBg w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="absolute 3xl:top-[530px] 3xl:left-[168px] 2xl:left-[130px] xl:top-[530px] xl:left-[449px] xl:block animate-moveBounce hidden w-2 h-2 bg-gradient rounded-full" />
            <img className="absolute 3xl:top-[485px] 3xl:left-[881px] 2xl:top-[415px] 2xl:left-[620px] xl:top-[335px] xl:left-[510px] lg:top-[355px] lg:left-[440px] lg:block animate-rotateMe hidden" src={heroShape4} alt="Banner Shape 4" />
            <img className="absolute 3xl:left-[556px] 3xl:bottom-16 2xl:left-[355px] xl:left-64 xl:bottom-8 xl:block animate-rotateMe2 hidden" src={heroShape5} alt="Banner Shape 5" />
            <img className="absolute 3xl:top-56 3xl:right-[331px] 2xl:right-32 xl:top-48 xl:right-32 lg:max-w-[400px] lg:top-52 lg:right-[85px] lg:block hidden" src={heroShape6} alt="Banner Shape 6" />
            <img className="absolute 3xl:top-[256px] 3xl:right-[625px] 2xl:top-[270px] 2xl:right-[464px] xl:top-[215px] xl:right-[280px] lg:top-[220px] lg:right-[211px] lg:block hidden" src={heroShape7} alt="Banner Shape 7" />
            <img className="absolute top-0 left-0 right-0 m-auto text-center xl:block hidden" src={heroShape8} alt="Banner Shape 8" />
        </div>
    )
}

export default HeroSec
