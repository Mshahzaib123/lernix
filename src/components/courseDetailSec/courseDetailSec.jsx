import { React, useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import { relatedCoursesData, courseDetailData, socialData2, featuredCoursesData, coursesListData, coursesData } from '../../Data';
import { Star, Play } from '@phosphor-icons/react';

import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import TabsComponent from './tabsComponent';

import course1 from '../../assets/courses1.webp';
import course2 from '../../assets/courses2.webp';
import course3 from '../../assets/courses3.webp';
import course4 from '../../assets/courses4.webp';
import course5 from '../../assets/courses5.webp';
import course6 from '../../assets/courses6.webp';
import course7 from '../../assets/courses7.webp';
import course8 from '../../assets/courses8.webp';
import course9 from '../../assets/courses9.webp';
import course10 from '../../assets/courses10.webp';
import course11 from '../../assets/courses11.webp';
import course12 from '../../assets/courses12.webp';
import course13 from '../../assets/courses13.webp';
import course14 from '../../assets/courses14.webp';
import course15 from '../../assets/courses15.webp';
import course16 from '../../assets/courses16.webp';
import course17 from '../../assets/courses17.webp';
import course18 from '../../assets/courses18.webp';
import course20 from '../../assets/courses20.webp';
import course21 from '../../assets/courses21.webp';
import course22 from '../../assets/courses22.webp';
import course23 from '../../assets/courses23.webp';
import course24 from '../../assets/courses24.webp';
import course25 from '../../assets/courses25.webp';
import course26 from '../../assets/courses26.webp';
import course27 from '../../assets/courses27.webp';
import course28 from '../../assets/courses28.webp';
import course31 from '../../assets/courses31.webp';
import profileImg from '../../assets/courses30.webp';

const CourseDetailSec = () => {
    const { id } = useParams();
    const courseDetail = featuredCoursesData.find((item) => item.id == id) || coursesListData.find((item) => item.id == id) || coursesData.find((item) => item.id == id)

    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="lg:w-2/3">
                        <div className="overflow-hidden rounded-lg">
                            <img className="w-full max-h-[500px] scale-105" src={courseDetail?.img ? courseDetail.img : course20} alt="" />
                        </div>
                        <div className="flex mt-10 mb-6">
                            <TitleComponent size='base-medium' className="py-2 px-5 bg-secondary rounded text-whiteShade">{courseDetail?.category ? courseDetail.category : "Data Science"}</TitleComponent>
                        </div>
                        <TitleComponent type='h2' className="text-black !leading-snug">{courseDetail?.heading ? courseDetail.heading : "UI/UX Design and Graphics Learning Bootcamp 2024"}</TitleComponent>
                        <div className="flex justify-between items-center gap-5 flex-wrap mt-6">
                            <div className="flex items-center gap-4">
                                <img className="w-11 h-11 border-4 border-solid border-white rounded-sm shadow-boxShadow" src={courseDetail?.instructorImg ? courseDetail.instructorImg : profileImg} alt="" />
                                <TitleComponent size='base-medium' className="text-secondary">Trainer: <span className="text-black">{courseDetail?.instructorName ? courseDetail.instructorName : "Natasha Nahid"}</span></TitleComponent>
                            </div>
                            <div>
                                <TitleComponent size='base-medium' className="text-secondary">Last Update: <span className="text-black">25 February, 2024</span></TitleComponent>
                            </div>
                        </div>
                        <TabsComponent />
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                            <div className="relative">
                                <img className="w-full rounded-lg" src={course31} alt="" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                    <Link to="#" className="flex justify-center items-center xl:w-20 xl:h-14 w-[70px] h-12 bg-secondary rounded-xl">
                                        <Play className="text-white" weight='fill' size={20} />
                                    </Link>
                                </div>
                            </div>
                            <TitleComponent type='h3' className="text-black mt-8 mb-6">Free</TitleComponent>
                            <ThemeButton variant="solid" theme="primary2" text="Start Free Trail" className="w-full" />

                            <div className="flex flex-col md:gap-5 gap-4 mt-8">
                                {courseDetailData.map((item, index) => (
                                    <ul key={index} className="flex justify-between items-center md:pb-5 pb-4 border-b brder-b-solid border-b-whiteShade200">
                                        <li className="flex items-center gap-2">
                                            <item.icon className='text-primary' weight='bold' size={20} />
                                            <h6 className="text-black md:text-base text-sm font-medium">{item.title}</h6>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <TitleComponent size='small-medium' className="text-bodyColor2 md:text-base">{item.title == "Instructor" ? (courseDetail?.instructorName ? courseDetail.instructorName : item.detail) : item.detail}</TitleComponent>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className="flex justify-start items-center gap-5 mt-6">
                                <TitleComponent type='h6' className="text-black !font-bold">Share On:</TitleComponent>
                                <ul className="flex  xl:gap-3 gap-2">
                                    {socialData2.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.path}>
                                                <img className="xl:w-10 xl:h-10 lg:w-9 lg:h-9 w-10 h-10 object-cover rounded-sm duration-300 hover:-translate-y-2.5" src={item.icon} alt="" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Related Courses</TitleComponent>
                            <ul className="flex flex-col gap-6 mt-6">
                                {relatedCoursesData.map((item, index) => (
                                    <li key={index} className="grid grid-cols-[auto_1fr] items-center gap-5 pb-6 border-b last:border-b-0 border-b-solid border-b-whiteShade200">
                                        <img className="w-20 h-20 object-cover rounded" src={item.img} alt="" />
                                        <div>
                                            <ul className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <Star className="text-yellow" weight='fill' size={16} />
                                                    </li>
                                                ))}
                                            </ul>
                                            <TitleComponent type='h6' className="text-black mt-2.5 mb-2">{item.heading}</TitleComponent>
                                            <TitleComponent size='base-medium' className="text-primary">{item.price}</TitleComponent>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailSec
