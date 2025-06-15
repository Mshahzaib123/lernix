import { EnvelopeSimple, Star } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeInput from '../themeInput/themeInput';

import newsltter1Img from '../../assets/newsletter1.webp';
import newsletter2Img from '../../assets/newsletter2.webp';
import newsltterShape from '../../assets/newsletter-shape.svg';
import udemyLogo from '../../assets/udemy.svg';
import shape15 from '../../assets/shape15.svg';

const NewsletterSec2 = () => {
    return (
        <section className="relative lg:pt-32 md:pt-[90px] pt-[70px] bg-lightPink300 pb-44">
            <div className="container">
                <div className="flex justify-between items-center lg:flex-row flex-col gap-6">
                    <div className="relative lg:w-1/2 mt-8">
                        <div className="relative xl:max-w-[308px] sm:max-w-64 z-[2]">
                            <img className="rounded-xl" src={newsltter1Img} alt="" />
                            <div className="absolute top-20 sm:-right-32 right-0 inline-block p-3.5 bg-whiteShade rounded-lg  shadow-boxShadow3 transform duration-300 z-[2] group hover:-translate-y-2.5">
                                <ul className="flex items-center gap-x-4">
                                    <li className="flex items-center gap-1">
                                        <img src={udemyLogo} alt="Udemy LOGO" />
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <TitleComponent size='large-bold' className='text-black'>4.9</TitleComponent>
                                        <Star className='text-yellow' weight='fill' size={16} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative lg:max-w-[308px] sm:w-1/2 max-w-full sm:-mt-9 mt-6 sm:mr-[70px] ml-auto z-[2]">
                            <img className="rounded-xl" src={newsletter2Img} alt="" />
                            <div className="absolute sm:-top-10 sm:-right-8 top-0 right-0 text-center p-2.5 rounded-xl bg-whiteShade shadow-boxShadow">
                                <TitleComponent type='h6' className='text-primary !font-bold'>18+</TitleComponent>
                                <TitleComponent size='large-bold' className='text-black'>Winning Award</TitleComponent>
                            </div>
                            <div className="absolute sm:-left-32 left-0 bottom-[75px] text-center p-2.5 rounded-xl bg-whiteShade shadow-boxShadow">
                                <TitleComponent type='h6' className='text-primary !font-bold'>100+</TitleComponent>
                                <TitleComponent size='large-bold' className='text-black'>Mentors & Teachers</TitleComponent>
                            </div>
                        </div>
                        <img className="absolute lg:top-11 top-0 left-0 right-0 m-auto text-center sm:block hidden" src={newsltterShape} alt="" />
                    </div>
                    <div className="lg:w-1/2 xl:ml-5">
                        <TitleComponent type='h2' className='text-black'>Join Our Newsletter To Stay Up To Date!</TitleComponent>
                        <TitleComponent size='base-medium' className='text-bodyColor mt-7 mb-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</TitleComponent>
                        <ThemeInput
                            type={"email"}
                            name={"email"}
                            id={"email"}
                            placeholder={"Write your email"}
                            required={true}
                            buttonText={"Subscribe"}
                            icon={EnvelopeSimple} className=''
                        />
                    </div>
                </div>
            </div>
            <img className="absolute 3xl:top-[87px] 3xl:left-24 top-9 left-14 3xl:max-w-full max-w-12 lg:block hidden" src={shape15} alt="" />
            <div className="absolute 3xl:top-16 3xl:right-48 top-9 right-44 w-2.5 h-2.5 bg-gradient rounded-full 3xl:animate-moveBounce lg:block hidden" />
            <div className="absolute 3xl:top-72 3xl:right-24 top-[105px] right-10 w-2 h-2 bg-primary rounded-full 3xl:animate-moveBg lg:block hidden" />
            <div className="absolute 3xl:left-14 3xl:bottom-[300px] left-7 bottom-32 w-2.5 h-2.5 bg-gradient rounded-full 3xl:animate-moveBg lg:block hidden" />
            <div className="absolute 3xl:left-[151px] 3xl:bottom-56 left-[150px] bottom-10 w-2 h-2 bg-primary rounded-full 3xl:animate-moveBounce lg:block hidden" />
        </section>
    )
}

export default NewsletterSec2
