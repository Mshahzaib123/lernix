import { Link, useParams } from 'react-router-dom';
import { EnvelopeSimple, PhoneCall, MapPin } from '@phosphor-icons/react';
import { featuredCoursesData, socialData2, instructorsData, lecturersData } from '../../Data';

import TitleComponent from '../titleComponent/titleComponent';
import SectionTitle from '../sectionTitle/sectionTitle';
import CourseCard2 from '../coursesSec/courseCard2';

// import team1 from '../../assets/team1.webp';
// import team2 from '../../assets/team2.webp';
// import team4 from '../../assets/team4.webp';
// import team5 from '../../assets/team5.webp';
// import team6 from '../../assets/team6.webp';
// import team7 from '../../assets/team7.webp';
// import team8 from '../../assets/team8.webp';
// import team9 from '../../assets/team9.webp';
// import team10 from '../../assets/team10.webp';
// import team11 from '../../assets/team11.webp';
// import team12 from '../../assets/team12.webp';
// import team13 from '../../assets/team13.webp';
// import team14 from '../../assets/team14.webp';
// import team15 from '../../assets/team15.webp';
import team16 from '../../assets/team16.webp';
import rate1Svg from '../../assets/rate1.svg';
import rate2Svg from '../../assets/rate2.svg';
import rate3Svg from '../../assets/rate3.svg';
import shape26 from '../../assets/shape26.svg';
import shape27 from '../../assets/shape27.svg';
import shape28 from '../../assets/shape28.svg';
import shape29 from '../../assets/shape29.svg';
import shape30 from '../../assets/shape30.svg';

const TeamDetailSec = () => {
    const { id } = useParams();
    const teamDetail = instructorsData.find((item) => item.id == id) || lecturersData.find((item) => item.id == id)

    return (
        <section className="relative lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="relative z-[2] flex gap-6 items-start lg:flex-row flex-col">
                    <div className="lg:w-1/3 bg-whiteShade overflow-hidden rounded-lg shadow-boxShadow2">
                        <div className="flex">
                            <img className='scale-105' src={teamDetail?.img ? teamDetail.img : team16} alt="" />
                        </div>
                        <div className="xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">{teamDetail?.name ? teamDetail.name : "Julia B. Corbin"}</TitleComponent>
                            <TitleComponent size='base-medium' className="xl:mt-5 xl:mb-10 my-5">Professor & Chair of Department of Computer Science at University the where been since 1994. vulput for the pellentesque commodo.</TitleComponent>
                            <ul className="flex flex-col xl:gap-8 gap-5">
                                <li className="grid grid-cols-[auto_1fr] items-center gap-4">
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded">
                                        <EnvelopeSimple className="text-whiteShade" weight='bold' size={14} />
                                    </div>
                                    <Link to="mailto:support.learnix@email.com" className="text-bodyColor text-base font-semibold duration-300 hover:text-primary">support.learnix@email.com</Link>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-4">
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded">
                                        <PhoneCall className="text-whiteShade" weight='fill' size={14} />
                                    </div>
                                    <Link to="#" className="text-bodyColor text-base font-semibold duration-300 hover:text-primary">+1 234 5678 900</Link>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-4">
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded">
                                        <MapPin className="text-whiteShade" weight='fill' size={14} />
                                    </div>
                                    <TitleComponent size='base-semibold' className="text-bodyColor">6/2, Stavello Hall, Sydney</TitleComponent>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <TitleComponent type='h5' className="text-black">Follow Me On:</TitleComponent>
                                <div className="flex items-center gap-2 mt-5">
                                    {socialData2.map((item, index) => (
                                        <Link key={index} to={item.path}>
                                            <img className="lg:w-10 lg:h-10 sm:w-12 sm:h-12 w-10 h-10 rounded object-cover" src={item.icon} alt="" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 xl:pl-8 pl-0">
                        <TitleComponent type='h3' className="text-black">{teamDetail?.name ? teamDetail.name : "Julia B. Corbin"}</TitleComponent>
                        <TitleComponent size='large-bold' className="text-primary mt-3 mb-5">{teamDetail?.designation ? teamDetail.designation : "Instructor"}</TitleComponent>
                        <TitleComponent size='base-medium' className="text-bodyColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate pellentesque commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TitleComponent>
                        <TitleComponent size='base-medium' className="text-bodyColor mb-4">Donec faucibus imperdiet libero, at lacinia metus. Quisque finibus ante non arcu aliquet, nec vestibulum dolor condimentum. Nulla facilisi. Vestibulum porttitor vestibulum est eu dignissim. Quisque blandit elementum convallis. Ut et mi hendrerit, posuere purus ac, facilisis nibh.</TitleComponent>
                        <div className="flex 2xl:gap-x-16 gap-x-6 gap-y-14 3xl:justify-between justify-center lg:flex-nowrap flex-wrap sm:flex-row flex-col mt-[76px] mb-14">
                            <div className="md:w-1/3 relative duration-300 group hover:-translate-y-2.5">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                                    <img className="xl:w-20 xl:h-20 w-16 h-16 object-cover" src={rate1Svg} alt="" />
                                </div>
                                <div className="bg-whiteShade shadow-boxShadow rounded-lg xl:pt-14 xl:px-6 xl:pb-6 pt-11 px-5 pb-5 text-center">
                                    <h3 className="text-black 2xl:text-4xl xl:text-3xl text-2xl font-bold">45+</h3>
                                    <TitleComponent size='base-semibold' className="text-lightGrey xl:mt-4 mt-3 xl:text-lg">Enrolled Students</TitleComponent>
                                </div>
                            </div>
                            <div className="md:w-1/3 relative duration-300 group hover:-translate-y-2.5">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                                    <img className="xl:w-20 xl:h-20 w-16 h-16 object-cover" src={rate2Svg} alt="" />
                                </div>
                                <div className="bg-whiteShade shadow-boxShadow rounded-lg xl:pt-14 xl:px-6 xl:pb-6 pt-11 px-5 pb-5 text-center">
                                    <h3 className="text-black 2xl:text-4xl xl:text-3xl text-2xl font-bold">24+</h3>
                                    <TitleComponent size='base-semibold' className="text-lightGrey xl:mt-4 mt-3 xl:text-lg">Academic Programs</TitleComponent>
                                </div>
                            </div>
                            <div className="md:w-1/3 sm:w-1/2 relative duration-300 group hover:-translate-y-2.5">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                                    <img className="xl:w-20 xl:h-20 w-16 h-16 object-cover" src={rate3Svg} alt="" />
                                </div>
                                <div className="bg-whiteShade shadow-boxShadow rounded-lg xl:pt-14 xl:px-6 xl:pb-6 pt-11 px-5 pb-5 text-center">
                                    <h3 className="text-black 2xl:text-4xl xl:text-3xl text-2xl font-bold">8+</h3>
                                    <TitleComponent size='base-semibold' className="text-lightGrey xl:mt-4 mt-3 xl:text-lg">Award Winning</TitleComponent>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="md:mb-10 mb-8">
                                <SectionTitle
                                    subtitle="Courses by Julia B. Corbin"
                                    title="Choose Our Top"
                                    highlightedText="Courses"
                                    headingLevel='h2'
                                />
                            </div>
                            <div className='grid sm:grid-cols-2 gap-6'>
                                {featuredCoursesData.slice(0, 4).map((data, index) => (
                                    <CourseCard2 key={index} data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute 3xl:top-[444px] 3xl:left-44 top-20 left-2.5 -z-[1] lg:block hidden" src={shape26} alt="" />
            <img className="absolute -z-[1] 3xl:top-40 3xl:right-[188px] top-24 right-5 lg:block hidden" src={shape27} alt="" />
            <img className="absolute -z-[1] top-[925px] 3xl:left-48 left-14 lg:block hidden" src={shape28} alt="" />
            <img className="absolute -z-[1] left-52 bottom-[274px] lg:block hidden" src={shape29} alt="" />
            <img className="absolute -z-[1] 3xl:right-48 right-2.5 3xl:bottom-[549px] bottom-[450px] lg:block hidden" src={shape30} alt="" />
        </section>
    )
}

export default TeamDetailSec
