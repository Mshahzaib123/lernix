import { useNavigate } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';

import chooseUse3Img from '../../assets/choose3.webp';
import udemyLogo from '../../assets/udemy.svg';
import user2 from '../../assets/user2.svg';

const ChooseUsSec3 = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/about")
    }
    return (
        <section className="relative lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12 before:content-[''] before:absolute before:top-1/2 before:trnalsate-y-1/2 before:bg-black before:w-full before:h-1/2 before:-z-[1] ">
            <div className="container">
                <div className="bg-darkBlue2 xl:pl-12 md:pl-8 lg:pt-0 md:pt-8 md:pr-0 md:pb-0 p-6 lg:overflow-visible overflow-hidden rounded-xl">
                    <div className="flex justify-between flex-wrap md:items-center">
                        <div className="lg:w-1/3">
                            <div className='xl:-mr-[85px] lg:m-0 mb-6 lg:p-0 md:pr-7 p-0'>
                                <SectionTitle
                                    subtitle="Why Choose Us"
                                    title="One Platform & Many"
                                    highlightedText="Courses"
                                    headingColor="text-white"
                                    remainingTitle="For You"
                                    headingLevel='h2'
                                />
                                <TitleComponent size='base-medium' className='text-whiteShade xl:text-lg xl:mt-8 xl:mb-10 md:mt-6 md:mb-7 mt-4 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when</TitleComponent>
                                <ThemeButton variant="split" theme="secondary2" text="Enroll Now" onClick={handleClick} />
                            </div>
                        </div>
                        <div className="relative lg:w-1/3 md:w-1/2 flex justify-center">
                            <div className="xl:ml-[75px] lg:-mr-48 2xl:-mt-28 xl:-mt-24 mx-0 mt-0">
                                <img className="img" src={chooseUse3Img} alt="" />
                                <div className="inline-block absolute left-5 md:bottom-44 bottom-[70px] z-[2] rounded-lg bg-whiteShade shadow-boxShadow3 p-3.5 duration-300 hover:-translate-y-2.5">
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
                            </div>
                        </div>
                        <div className='relative z-[3] lg:w-1/3 md:w-1/2'>
                            <div className="md:-ml-12 md:-mr-px m-0 overflow-hidden xl:rounded-tr-xl xl:rounded-br-xl">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="grid sm:grid-cols-[auto_1fr] sm:items-center items-start gap-5 xl:py-12 xl:px-8 p-5 bg-lightPink200 border-b-1 last:border-b-0 border-b-solid border-b-bodyColor2 duration-300 group">
                                        <div className="relative xl:w-24 xl:h-28 w-20 h-24 flex justify-center items-center bg-grey100 rounded overflow-hidden duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-primary before:duration-300 group-hover:before:h-full">
                                            <img className="relative z-[2] w-14 h-14 object-contain" src={user2} alt="" />
                                        </div>
                                        <div>
                                            <h4 className=' text-black 2xl:text-2xl xl:text-lg text-base leading-normal font-bold'>Expert-Led Curriculum</h4>
                                            <TitleComponent size='small-medium' className="text-bodyColor xl:text-base xl:mt-3 mt-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</TitleComponent>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSec3
