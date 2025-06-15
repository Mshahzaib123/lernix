import { awardData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';

import aboutImg4 from '../../assets/about5.webp';
import aboutImg5 from '../../assets/about6.webp';
import awardLogo from '../../assets/awards-logo.svg';
import videoPlaySvg from '../../assets/video-play.svg';

const AboutSec2 = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex md:items-center gap-y-6 justify-between lg:flex-row flex-col">
                    <div className="lg:w-1/2 md:w-3/5 lg:mr-5">
                        <div className="flex justify-end">
                            <img className="sm:max-w-[445px] rounded-lg" src={aboutImg4} alt="" />
                        </div>
                        <div className="sm:-mt-60 mt-6">
                            <img className="relative z-10 border-4 border-solid border-white rounded-2xl object-cover object-center sm:max-w-[308px]" src={aboutImg5} alt="" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 2xl:ml-12 ml-0">
                        <SectionTitle
                            subtitle="About Learnix"
                            title="Discover Our Vision for Digital"
                            highlightedText="Education"
                            headingLevel="h2"
                        />
                        <div className="flex justify-between gap-y-6 sm:flex-row flex-col mt-10 pb-5 border-b border-solid border-greyLight">
                            <div className="sm:w-3/5">
                                <ul className="flex flex-col gap-4">
                                    {awardData.map((item, index) => (
                                        <li className="flex items-center gap-4" key={index}>
                                            <img className="w-5 h-5 object-contain" src={item.icon} alt="" />
                                            <h6 className='text-black xl:text-lg text-base leading-normal font-semibold'>{item.text}</h6>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sm:w-2/5 flex flex-col items-center gap-7 p-6 pt-0 bg-whiteShade rounded-xl shadow-boxShadow">
                                <img className="w-24 h-20 object-cover" src={awardLogo} alt="" />
                                <div className="text-center">
                                    <TitleComponent type='h4' className='text-black'>25+</TitleComponent>
                                    <TitleComponent size='base-medium' className='text-bodyColor'>Winning Awards</TitleComponent>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] items-center gap-5 mt-10 ">
                            <div className="flex justify-center items-center md:w-20 md:h-20 w-16 h-16 bg-white rounded-full shadow-boxShadow2 cursor-pointer duration-300 group hover:-translate-y-1.5">
                                <img src={videoPlaySvg} alt="" />
                            </div>
                            <div>
                                <h6 className='text-black lg:text-lg text-base max-2xs:text-sm leading-normal font-semibold'>All Classes Video Provided</h6>
                                <TitleComponent size='extra-small-medium' className='text-bodyColor 2xs:mt-1.5 mt-1 xl:text-lg 2xs:text-base'>There are many variations of passages of but the majority have suffered.</TitleComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec2
