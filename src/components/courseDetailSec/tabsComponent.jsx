import { React, useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { CheckSquare, Star, CaretDown } from '@phosphor-icons/react';
import { courseContentData, courseReviewData } from '../../Data';

import TitleComponent from '../titleComponent/titleComponent';

import computerSvg from '../../assets/computer.svg';
import paperSvg from '../../assets/paper.svg';
import internetSvg from '../../assets/internet.svg';
import textSvg from '../../assets/text.svg';
import profileSvg from '../../assets/profile.svg';
import star2Svg from '../../assets/star2.svg';
import likeSvg from '../../assets/like.svg';
import facebookSvg from '../../assets/facebook.svg';
import linkedInSvg from '../../assets/linkedin2.svg';
import youtubeSvg from '../../assets/youtube.svg';
import twitterSvg from '../../assets/twitter1.svg';
import instagram2Svg from '../../assets/instagram2.svg';
import lockSvg from '../../assets/lock.svg';
import courseInstructor from '../../assets/courses35.png';

const TabsComponent = () => {
    const menuData = ["Overview", "Carriculum", "Instructor", "Reviews"];
    const [toggle, setToggle] = useState(menuData[0]);
    const toggleTab = (item) => setToggle(item)

    const [openAccordion, setOpenAccordion] = useState(null);
    const contentRefs = useRef([]);
    const [contentHeights, setContentHeights] = useState([]);

    const toggleCollapse = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        const heights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
        setContentHeights(heights);
    }, [openAccordion]);

    const ratings = [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 80 },
        { stars: 3, percent: 60 },
        { stars: 2, percent: 40 },
        { stars: 1, percent: 20 }
    ];

    return (
        <>
            <nav className="my-10">
                <div className="flex justify-center md:flex-nowrap flex-wrap md:gap-0 gap-y-3">
                    {menuData.map((item, index) => (
                        <button key={index} id={item} className={`first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br last:border-r-0 border-r-2 border-r-solid border-r-whiteShade xl:py-4 2xl:px-16 xl:px-12 py-3 px-8 lg:text-lg text-base font-bold ${toggle === item ? "bg-primary text-whiteShade" : "bg-grey100 text-bodyColor duration-300 hover:bg-primary hover:text-whiteShade"}`} onClick={() => toggleTab(item)}>{item}</button>
                    ))}
                </div>
            </nav>
            <div>
                <div className={`${toggle === menuData[0] ? "block" : "hidden"}`}>
                    <TitleComponent type='h4' className="text-black">Course Description</TitleComponent>
                    <TitleComponent size='base-medium' className="mt-5 mb-4 text-bodyColor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries,</TitleComponent>
                    <TitleComponent size='base-medium' className="text-bodyColor">but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in Link piece of classical</TitleComponent>
                    <div className="mt-11 mb-10 bg-grey100 xl:p-7 p-5 rounded">
                        <TitleComponent type='h6' className="text-black !font-bold">What You will Learn?</TitleComponent>
                        <ul className="grid md:grid-cols-2 gap-5 md:mt-8 mt-5">
                            {[...Array(4)].map((_, i) => (
                                <li key={i} className="grid grid-cols-[auto_1fr] items-start gap-x-3">
                                    <div className="flex justify-center items-center w-6 h-6">
                                        <CheckSquare className="text-bodyColor" weight='bold' size={24} />
                                    </div>
                                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</TitleComponent>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <TitleComponent type='h6' className="text-black !font-semibold">Requirements</TitleComponent>
                        <div className="flex md:justify-start justify-center items-center xl:gap-5 gap-3 flex-wrap mt-8">
                            <button className="flex items-center gap-3 bg-whiteShade shadow-boxShadow rounded cursor-pointer xl:py-4 py-3 2xl:px-9 xl:px-8 lg:px-4 px-8 duration-300 group hover:-translate-y-2.5">
                                <img className="max-w-6 object-contain" src={computerSvg} alt="" />
                                <TitleComponent size='small-medium' className="text-black lg:text-base">Computer/Mobile</TitleComponent>
                            </button>
                            <button className="flex items-center gap-3 bg-whiteShade shadow-boxShadow rounded cursor-pointer xl:py-4 py-3 2xl:px-9 xl:px-8 lg:px-4 px-8 duration-300 group hover:-translate-y-2.5">
                                <img className="max-w-6 object-contain" src={paperSvg} alt="" />
                                <TitleComponent size='small-medium' className="text-black lg:text-base">Paper & Pencil</TitleComponent>
                            </button>
                            <button className="flex items-center gap-3 bg-whiteShade shadow-boxShadow rounded cursor-pointer xl:py-4 py-3 2xl:px-9 xl:px-8 lg:px-4 px-8 duration-300 group hover:-translate-y-2.5">
                                <img className="max-w-6 object-contain" src={internetSvg} alt="" />
                                <TitleComponent size='small-medium' className="text-black lg:text-base">Internet Connect</TitleComponent>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${toggle === menuData[1] ? "block" : "hidden"}`}>
                    <div className="grid md:gap-6 gap-5">
                        {courseContentData.map((item, index) => (
                            <div key={index}>
                                <button className={`flex justify-between items-center w-full rounded xl:p-7 md:p-5 py-3.5 px-5 ${openAccordion === index ? "bg-primary" : "bg-grey100"} duration-500`} onClick={() => toggleCollapse(index)}>
                                    <div className='flex justify-start items-center gap-2'>
                                        <CaretDown className={`${openAccordion === index ? "text-whiteShade rotate-180" : "text-black"} duration-500`} weight='bold' size={18} />
                                        <h6 className={`${openAccordion === index ? "text-whiteShade" : "text-black"} duration-500 text-left md:text-lg sm:text-base text-sm font-semibold`}>{item.heading}</h6>
                                    </div>
                                    <div className="sm:block hidden">
                                        <TitleComponent size='small-medium' className={`${openAccordion === index ? "text-whiteShade" : "text-bodyColor"} duration-500 md:text-base`}> {`${item.noOfLec} Lectures, ${item.runTime}`}</TitleComponent>
                                    </div>
                                </button>
                                <div
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    className={`overflow-hidden duration-500 ease-in-out`}
                                    style={{
                                        height: openAccordion === index ? `${contentHeights[index]}px` : "0px",
                                    }}
                                >
                                    <div className="bg-white md:p-8 p-5 rounded-bl rounded-br">
                                        <h4 className="md:mb-4 mb-3 text-black md:text-lg text-base font-semibold">{`${item.level} Level`}</h4>
                                        <TitleComponent size='small-medium' className="text-bodyColor md:text-base">{item.desc}</TitleComponent>
                                        <TitleComponent type='h6' className="md:mt-6 md:mb-4 my-3 text-black !font-semibold">{item.courseArchive}</TitleComponent>
                                        <ul className="flex flex-col gap-2.5">
                                            {item.content.map((subItem, subIndex) => (
                                                <li key={subIndex} className="flex justify-between sm:items-center items-start sm:gap-y-0 gap-y-3 sm:flex-row flex-col pb-5 border-b border-b-solid border-greyLight last:border-b-0">
                                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                                        <img className="max-w-6" src={subItem.type} alt="icon" />
                                                        <TitleComponent size='small-medium' className="text-bodyColor md:text-base">{subItem.title}</TitleComponent>
                                                    </div>

                                                    <div className="flex items-center gap-4">
                                                        {
                                                            subItem.preview && <button className="bg-primary py-1 px-4 rounded-sm text-whiteShade text-base leading-normal font-medium">Preview</button>
                                                        }
                                                        {
                                                            subItem.locked && <img className="max-w-6" src={lockSvg} alt="icon" />
                                                        }
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`bg-grey100 rounded-lg xl:p-8 p-5 ${toggle === menuData[2] ? "block" : "hidden"}`}>
                    <div className="grid md:grid-cols-[auto_1fr] sm:grid-cols-2 xl:gap-8 gap-5">
                        <div className='w-full'>
                            <img className="md:max-w-[270px] w-full rounded" src={courseInstructor} alt="" />
                        </div>
                        <div>
                            <TitleComponent type='h3' className="text-black">Daniel Smith</TitleComponent>
                            <TitleComponent size='base-medium' className="md:mt-2.5 md:mb-8 mt-2 mb-5 text-primary">User Experience Designer</TitleComponent>
                            <ul className="flex flex-col gap-5">
                                <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <img className="max-w-6" src={textSvg} alt="" />
                                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">65+ Courses</TitleComponent>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <img className="max-w-6" src={profileSvg} alt="" />
                                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">2k+ Student Learned</TitleComponent>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <img className="max-w-6" src={star2Svg} alt="" />
                                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">547+ Reviews</TitleComponent>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <img className="max-w-6" src={likeSvg} alt="" />
                                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">4.9 Average Rating</TitleComponent>
                                </li>
                            </ul>
                            <ul className="flex items-center md:gap-8 gap-5 mt-6">
                                <li>
                                    <Link to="#">
                                        <img className="max-w-6 duration-300 hover:-translate-y-2.5" src={facebookSvg} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img className="max-w-6 duration-300 hover:-translate-y-2.5" src={linkedInSvg} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img className="max-w-6 duration-300 hover:-translate-y-2.5" src={youtubeSvg} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img className="max-w-6 duration-300 hover:-translate-y-2.5" src={instagram2Svg} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img className="max-w-6 duration-300 hover:-translate-y-2.5" src={twitterSvg} alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <TitleComponent size='small-medium' className="md:mt-8 mt-5 text-bodyColor md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.</TitleComponent>
                </div>
                <div className={`${toggle === menuData[3] ? "block" : "hidden"}`}>
                    <div className="flex justify-evenly items-center md:flex-row flex-col gap-3">
                        <ul className="lg:w-3/4 flex flex-col xl:gap-5 gap-3">
                            {ratings.map((item, index) => (
                                <li key={index} className="flex sm:items-center items-start sm:gap-4 gap-1.5 sm:flex-row flex-col">
                                    <ul className="flex items-center gap-0.4">
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}>
                                                <Star
                                                    size={20}
                                                    weight="fill"
                                                    className={i < item.stars ? "text-yellow" : "text-whiteShade200"}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center gap-2 md:justify-start justify-between w-full">
                                        <div className="relative">
                                            <div className="2xl:w-[420px] xl:w-[350px] lg:w-[320px] md:w-[300px] w-[250px] h-2 bg-grey100" />
                                            <div className='absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-primary' style={{ width: `${item.percent}%` }} />
                                        </div>
                                        <TitleComponent size='small-semibold' className="text-bodyColor xl:text-lg md:text-base">{item.percent}%</TitleComponent>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="lg:w-1/4 bg-white shadow-boxShadow rounded-lg flex items-center flex-col text-center xl:py-12 xl:px-10 lg:p-5 p-8 2xs:w-auto w-full">
                            <h3 className="text-black md:text-[44px] text-3xl font-lexend leading-normal font-bold">4.9</h3>
                            <ul className="flex items-center gap-0.5 mt-2.5 my-2">
                                {[...Array(5)].map((_, i) => (
                                    <li key={i}>
                                        <Star className="text-yellow" weight='fill' size={20} />
                                    </li>
                                ))}
                            </ul>
                            <TitleComponent size='base-medium' className="text-bodyColor">(2 Review)</TitleComponent>
                        </div>
                    </div>
                    <div className="mt-6">
                        <TitleComponent type='h4' className="text-black">Reviews</TitleComponent>
                        <ul className="flex flex-col md:gap-8 gap-5 mt-6">
                            {courseReviewData.map((item, index) => (
                                <li key={index} className="grid sm:grid-cols-[auto_1fr] gap-3 pb-5 border-b border-b-solid border-b-greyLight last:border-b-0">
                                    <div>
                                        <img className="w-[72px] h-[72px] object-cover rounded-full" src={item.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <ul className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}>
                                                    <Star className="text-yellow" weight='fill' size={20} />
                                                </li>
                                            ))}
                                        </ul>
                                        <TitleComponent size='small-medium' className="md:mt-5 md:mb-6 mt-3 mb-4 text-bodyColor md:text-base">{item.desc}</TitleComponent>
                                        <div className="flex flex-col gap-2.5">
                                            <TitleComponent type='h6' className="text-black !font-bold">{item.name}</TitleComponent>
                                            <TitleComponent size='small-medium' className="text-bodyColor lg:text-lg md:text-base">Jan 24, 2024</TitleComponent>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TabsComponent
