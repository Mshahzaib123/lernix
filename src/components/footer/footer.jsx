import { Link, useLocation } from 'react-router-dom';
import { ArrowUp } from '@phosphor-icons/react';
import { footerNavigationData, socialData, copyrightMenuData } from '../../Data';
import TitleComponent from '../titleComponent/titleComponent';

import brandLogoLight from '../../assets/brand-logo-light-2.svg';
import brandLogoDark from '../../assets/brand-logo-dark-2.svg';
import playStore from '../../assets/google.svg';
import appStore from '../../assets/app-store.svg';
import footerShape1 from '../../assets/shape12.svg';
import footerShape2 from '../../assets/shape13.svg';
import footerShape3 from '../../assets/shape14.svg';
import footerShape4 from '../../assets/footer-shape.webp';

const Footer = () => {
    const location = useLocation();
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <footer className={`relative lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12 ${location.pathname === '/homepage2' ? 'bg-white' : 'bg-darkBlue2'}`}>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 content-start">
                        <div className="lg:col-span-1 md:col-span-2">
                            <Link to="/" className="flex">
                                <img className="2xl:w-48 w-40 object-contain" src={`${location.pathname === '/homepage2' ? brandLogoDark : brandLogoLight}`} alt="Brand Logo" />
                            </Link>
                            <TitleComponent size="large-medium" className={`2xl:mt-6 mt-5 mb-4 ${location.pathname === '/homepage2' ? 'text-bodyColor' : 'text-white opacity-70'}`}>Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.</TitleComponent>
                            <Link to="mailto:support.learnix@email.com" className="text-primary underline xl:text-lg text-base font-medium">support.learnix@email.com</Link>
                            <ul className="flex items-center 2xl:gap-4 gap-5 2xl:mt-7 mt-5">
                                {socialData.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.path} className={`flex justify-center items-center 2xl:w-12 2xl:h-12 w-9 h-9 ${location.pathname === '/homepage2' ? 'bg-black' : 'bg-bodyColor'} rounded-full translate-y-0 duration-300 group hover:-translate-y-2.5 hover:bg-primary`}>
                                            <item.icon className='text-whiteShade' weight='bold' size={22} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-6'>
                            {footerNavigationData.map((item, index) => (
                                <div key={index}>
                                    <TitleComponent type='h4' className={`${location.pathname === '/homepage2' ? 'text-black' : 'text-white'}`}>{item.heading}</TitleComponent>
                                    <ul className="flex 2xl:gap-y-5 gap-y-3 flex-col 2xl:mt-10 mt-5">
                                        {item.menu.map((menuItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={menuItem.path} className={`inline-block 2xl:text-lg xs:text-base font-bold duration-300 hover:text-primary ${location.pathname === '/homepage2' ? 'text-bodyColor' : 'text-white opacity-70'}`}>{menuItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div>
                            <TitleComponent type='h4' className={`${location.pathname === '/homepage2' ? 'text-black' : 'text-white'}`}>Install Our App</TitleComponent>
                            <TitleComponent size="large-bold" className={`2xl:mt-10 mt-5 mb-7 ${location.pathname === '/homepage2' ? 'text-bodyColor' : 'text-white opacity-70'}`}>From App Store Or Google Play</TitleComponent>
                            <div className="flex gap-x-6 items-center">
                                <Link to="/">
                                    <img className="duration-500 hover:-translate-y-2.5" src={playStore} alt="" />
                                </Link>
                                <Link to="/">
                                    <img className="duration-500 hover:-translate-y-2.5" src={appStore} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={`absolute left-8 2xl:bottom-24 bottom-9 hidden ${location.pathname === "/homepage2" ? "" : "lg:block"}`} src={footerShape1} alt="" />
                <img className={`absolute 2xl:top-28 2xl:right-24 lg:top-11 lg:right-11 2xl:max-w-full max-w-[60%] hidden ${location.pathname === "/homepage2" ? "" : "lg:block"}`} src={footerShape2} alt="" />
                <img className={`absolute 2xl:bottom-16 2xl:right-[477px] bottom-48 right-48 hidden ${location.pathname === "/homepage2" ? "" : "lg:block"}`} src={footerShape3} alt="" />
                <img className={`absolute xl:-top-20 xl:-left-10 lg:-top-16 md:-top-8 sm:-top-6 -top-5 hidden ${location.pathname === "/homepage2" ? "lg:block" : ""}`} src={footerShape4} alt="" />
            </footer>

            <section className="relative pt-9 py-4 md:py-4 bg-primary">
                <div className="container">
                    <div className="flex gap-y-4 gap-x-8 justify-between items-center md:flex-row flex-col">
                        <TitleComponent size='small-medium' className='text-white text-center lg:text-base'>© Copyright 2024 | Learnix Template | All Rights Reserved</TitleComponent>
                        <ul className="flex xl:gap-x-10 lg:gap-x-8 gap-x-5">
                            {copyrightMenuData.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="relative text-white xl:text-base text-sm font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:duration-500 hover:after:w-full">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="absolute lg:-top-9 -top-8 left-1/2 tranform -translate-x-1/2">
                    <Link onClick={scrollTop} to="/" className="flex justify-center items-center lg:w-16 lg:h-16 lg:border-4 w-12 h-12 rounded-full bg-primary border-2 border-solid border-white duration-300 hover:bg-black">
                        <ArrowUp className='text-white' weight='bold' size={22} />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Footer