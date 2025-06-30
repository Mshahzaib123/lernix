import React from 'react';
import { Link } from 'react-router-dom';
import { socialData, footerContactData, footerServicesData } from '../../Data';
import { EnvelopeSimple } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import ThemeInput from '../themeInput/themeInput';

import brandLogo from '../../assets/brand-logo-light-2.svg';
import shape24 from '../../assets/shape24.webp';
import navigationCircle from '../../assets/footer-navigation-circle-2.svg';

const Footer2 = () => {
    return (
        <footer className="relative bg-black">
            <div className="container">
                <div className="grid grid-cols-[1fr_auto_auto_1fr] gap-6 relative z-[2] lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
                    <div className="lg:col-span-1 md:col-span-2 col-span-4">
                        <Link to="/">
                            <img className="2xl:w-48 w-40 object-contain" src={brandLogo} alt="Brand Logo" />
                        </Link>
                        <TitleComponent size="large-medium" className="2xl:mt-6 mt-5 mb-4 text-white">Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.</TitleComponent>
                        <TitleComponent type='h4' className='text-white'>Follow Us</TitleComponent>
                        <ul className="flex items-center gap-4 flex-wrap 2xl:mt-5 mt-4">
                            {socialData.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="flex justify-center items-center 2xl:w-10 2xl:h-10 w-9 h-9 bg-transparent border-1 border-solid boder-whiteShade rounded duration-300 group hover:bg-primary hover:-translate-y-2.5 hover:border-transparent">
                                        <item.icon className='text-whiteShade' weight='bold' size={22} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-4">
                        {footerServicesData.map((item, index) => (
                            <React.Fragment key={index}>
                                <TitleComponent type='h4' className='text-whiteShade'>{item.heading}</TitleComponent>
                                <ul className='flex flex-col 2xl:gap-y-5 2xl:mt-10 gap-y-3 mt-5'>
                                    {item.menu.map((subItem, subIndex) => (
                                        <li key={subIndex} className='flex items-center gap-3 relative'>
                                            <img src={navigationCircle} alt='' />
                                            <Link to={subItem.path} className="text-white 2xl:text-base text-sm font-bold duration-300 hover:text-primary">{subItem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-4">
                        {footerContactData.map((item, index) => (
                            <React.Fragment key={index}>
                                <TitleComponent type='h4' className='text-whiteShade'>{item.heading}</TitleComponent>
                                <ul className='flex flex-col 2xl:gap-y-5 2xl:mt-10 gap-y-3 mt-5'>
                                    {item.menu.map((subItem, subIndex) => (
                                        subItem.path ?
                                            <li key={subIndex} className='grid grid-cols-[auto_1fr] items-center gap-x-4'>
                                                <div className='flex justify-center items-center w-10 h-10 bg-primary rounded-full'>
                                                    <subItem.icon className='text-whiteShade' size={16} weight='fill' />
                                                </div>
                                                <div>
                                                    <TitleComponent size='base-medium' className='text-bodyColor 2xl:mb-0.5 mb-1.5'>{subItem.label}</TitleComponent>
                                                    <Link to={subItem.path} className='text-whiteShade break-all lg:text-lg text-base font-medium duration-300 hover:text-primary'>{subItem.title}</Link>
                                                </div>
                                            </li>
                                            :
                                            <li key={subIndex} className='grid grid-cols-[auto_1fr] items-center gap-x-4'>
                                                <div className='flex justify-center items-center w-10 h-10 bg-primary rounded-full'>
                                                    <subItem.icon className='text-whiteShade' size={18} weight='fill' />
                                                </div>
                                                <div>
                                                    <TitleComponent size='base-medium' className='text-bodyColor 2xl:mb-0.5 mb-1.5'>{subItem.label}</TitleComponent>
                                                    <TitleComponent size='large-medium' className='text-whiteShade'>{subItem.title}</TitleComponent>
                                                </div>
                                            </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="lg:col-span-1 md:col-span-2 col-span-4">
                        <TitleComponent type='h4' className='text-whiteShade'>Subscribe Newsletter:</TitleComponent>
                        <form className="flex flex-col 2xl:gap-y-5 2xl:mt-10 gap-y-3 mt-5">
                            <ThemeInput type={"email"}
                                name={"email"}
                                id={"email"}
                                placeholder={"Enter your Email"}
                                required={true}
                                icon={EnvelopeSimple}
                            />
                            <ThemeButton variant="solid" theme="primary3" text="Submit Now" className="w-fit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="border-t-1 border-t-solid border-t-bodyColor2 py-4 text-center">
                <TitleComponent size='base' className='text-bodyColor2'>Copyright © Learnix . All rights reserved..</TitleComponent>
            </div>
            <img className='absolute -top-28 left-2.5 z-[1] animate-rotateMe2 lg:block hidden' src={shape24} alt="" />
        </footer>
    )
}

export default Footer2
