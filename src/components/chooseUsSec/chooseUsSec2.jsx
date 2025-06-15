import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';
import { industryData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import IndustryListItem from './industryListItem';

import choose2 from '../../assets/choose2.webp'
import playShape from '../../assets/play-shape.svg';
import shape18 from '../../assets/shape18.svg';

const ChooseUsSec2 = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex justify-between items-center gap-6 lg:flex-row flex-col">
                    <div className="lg:w-1/2">
                        <SectionTitle
                            subtitle="Why Choose Us"
                            title="Your Gateway to Digital"
                            highlightedText="Success"
                            headingLevel='h2'
                        />
                        <TitleComponent size='base-medium' className='text-bodyColor xl:my-10 md:mt-6 md:mb-7 mt-5 mb-6 xl:text-lg xl:font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</TitleComponent>
                        <ul className='border-1 border-solid border-bodyColor2 rounded-xl'>
                            {industryData.map((data, index) => (
                                <li className='grid grid-cols-[auto_1fr] items-baseline gap-x-4 xl:py-6 xl:px-7 md:py-4 md:px-5 py-3 px-3.5 border-b-1 last:border-0 border-solid border-bodyColor2 group' key={index}>
                                    <IndustryListItem key={index} data={data} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img src={choose2} alt="" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Link to="/" className="relative flex justify-center items-center sm:w-[76px] sm:h-[76px] w-16 h-16 bg-whiteShade sm:border-8 border-4 border-solid border-lightPurple100 rounded-full">
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[136px] md:h-[136px] sm:w-28 sm:h-28 w-[90px] h-[90px] -z-[1] bg-primary rounded-full' />
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[148px] md:h-[148px] sm:w-32 sm:h-32 w-[100px] h-[100px] -z-[2] bg-whiteShade rounded-full' />
                                <Play className='text-primary relative z-10' weight='fill' size={24} />
                            </Link>
                        </div>
                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1] max-w-44" src={playShape} alt="" />
                        <img className="absolute top-5 right-7 animate-rotateMe2 -z-[1] sm:block hidden" src={shape18} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSec2
