import { useNavigate } from 'react-router-dom';
import { Check } from '@phosphor-icons/react';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

import aboutImg3 from '../../assets/about7.webp';
import learnIcon from '../../assets/learning.svg';

const AboutSec3 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="lg:w-1/2 flex justify-center items-center xl:mr-6 mr-0">
                        <img className='object-contain' src={aboutImg3} alt="" />
                    </div>
                    <div className="lg:w-1/2 2xl:ml-10 xl:ml-5 ml-0">
                        <SectionTitle
                            subtitle="About Learnix"
                            title="Discover Our Vision for Digital"
                            highlightedText="Education"
                            headingLevel='h2'
                        />
                        <TitleComponent size='base-medium' className='xl:my-10 md:my-7 my-6 xl:text-lg text-greyShade2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</TitleComponent>
                        <div className="relative overflow-hidden bg-grey100 grid sm:grid-cols-[auto_1fr] items-center lg:gap-7 gap-4 sm:py-5 sm:px-10 p-5 rounded-lg duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-primary lg:before:w-1/6 sm:before:w-1/12 before:w-0 before:h-full before:duration-300 group hover:before:w-full">
                            <div className="relative z-[2]">
                                <img className="md:w-24 md:h-24 w-[70px] h-[70px] object-contain border-2 border-solid border-whiteShade rounded-full" src={learnIcon} alt="" />
                            </div>
                            <div className="relative z-[2]">
                                <TitleComponent type='h4' className='xl:text-2xl md:text-xl text-lg text-black mb-2.5 duration-300 group-hover:text-white'>Easy Learning</TitleComponent>
                                <TitleComponent size='small-medium' className='xl:text-base text-bodyColor duration-300 group-hover:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</TitleComponent>
                            </div>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-6 xl:mt-10 xl:mb-8 mt-7 mb-6">
                            {[...Array(4)].map((_, i) => (
                                <li key={i} className="grid grid-cols-[auto_1fr] items-center xl:gap-x-5 gap-x-3 duration-300 group hover:-translate-y-1.5">
                                    <div className={`flex justify-center items-center xl:w-10 xl:h-10 w-7 h-7 ${i == 1 || i == 2 ? "bg-primary" : "bg-secondary"} rounded-full`}>
                                        <Check className="text-white" weight="bold" size={18} />
                                    </div>
                                    <TitleComponent size='base-bold' className='2xl:text-lg text-black'>Empowering Education</TitleComponent>
                                </li>
                            ))}
                        </ul>
                        <ThemeButton variant="solid" theme="primary2" text="Learn More" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec3
