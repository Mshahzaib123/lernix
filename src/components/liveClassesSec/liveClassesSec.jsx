import { Link } from 'react-router-dom';
import { SpeakerSimpleX, Phone, VideoCamera } from '@phosphor-icons/react';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';

import learning1 from '../../assets/learning1.webp';
import learning2 from '../../assets/learning2.webp';
import shape10 from '../../assets/shape10.svg';
import shape11 from '../../assets/shape11.svg';

const LiveClassesSec = () => {
    return (
        <section className="live_class relative bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="md:mb-12 mb-7">
                    <SectionTitle
                        subtitle="Live Classes"
                        title="It's Easy To Start"
                        highlightedText="Learning"
                        headingLevel='h2'
                        className='text-center'
                    />
                </div>
                <div className="relative">
                    <img className="rounded-xl" src={learning1} alt="" />
                    <div className="absolute xl:top-7 xl:right-7 md:top-5 md:right-5 top-2.5 right-2.5 flex items-center xl:gap-x-5 md:gap-x-4 gap-x-3 bg-white rounded xl:py-4 xl:px-8 lg:py-2.5 lg:px-4 md:py-2 md:px-4 py-1 px-2.5">
                        <TitleComponent type='h6' className="relative text-black uppercase pl-6 pl-4 md:text-sm text-xs after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-lightRed100 after:rounded-full">LIVE</TitleComponent>
                        <TitleComponent size='small' className='text-bodyColor xl:text-base md:text-sm text-xs'>01:30:08</TitleComponent>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 xl:bottom-12 lg:bottom-8 md:bottom-5 bottom-2.5">
                        <div className="flex items-center md:gap-x-4 gap-x-2">
                            <Link to="#" className="flex items-center justify-center xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 bg-white rounded-full duration-300 hover:-translate-y-2.5">
                                <SpeakerSimpleX className='xl:text-2xl lg:text-xl md:text-lg text-base text-black' weight='fill' />
                            </Link>
                            <Link to="#" className="flex items-center justify-center xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 rounded-full bg-lightRed100 duration-300 group hover:bg-lightPink100 hover:-translate-y-2.5 ">
                                <Phone className='xl:text-2xl lg:text-xl md:text-lg text-base text-white duration-300 group-hover:text-lightRed100' weight='fill' />
                            </Link>
                            <Link to="#" className="flex items-center justify-center xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-11 md:h-11 w-9 h-9 rounded-full bg-secondary duration-300 group hover:bg-lightPink100 hover:-translate-y-2.5">
                                <VideoCamera className='xl:text-2xl lg:text-xl md:text-lg text-base text-white duration-300 group-hover:text-secondary' weight='fill' />
                            </Link>
                        </div>
                    </div>
                    <img className="absolute xl:bottom-12 xl:left-12 lg:bottom-8 lg:left-8 md:bottom-5 md:left-5 bottom-2.5 left-2.5 xl:w-52 xl:h-52 lg:w-40 lg:h-40 md:w-24 md:h-24 w-14 h-14 xl:rounded-lg rounded object-cover xl:border-5 border-4 border-solid border-white" src={learning2} alt="" />
                </div>
            </div>
            <img className="absolute xl:top-28 xl:left-16 top-16 left-10 lg:block hidden" src={shape10} alt="" />
            <img className="absolute xl:right-16 xl:bottom-48 right-14 bottom-10 animate-rotateMe lg:block hidden" src={shape11} alt="" />
        </section>
    )
}

export default LiveClassesSec
