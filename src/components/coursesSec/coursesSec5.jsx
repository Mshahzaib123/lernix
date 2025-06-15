import { React } from 'react'

import { Link } from 'react-router-dom'
import { categoryData2, featuredCoursesData, languageData, skillLevelData } from '../../Data'
import { MagnifyingGlass, ArrowClockwise, Check, Star, CaretRight } from '@phosphor-icons/react'

import LayoutInfo from './layoutInfo'
import CourseCard2 from './courseCard2'
import TitleComponent from '../titleComponent/titleComponent'
import ThemeButton from '../themeButton/themeButton'

const CoursesSec5 = () => {
    let fillerStar = 5;
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex gap-6 lg:flex-row flex-col">
                    <div className="lg:w-2/3">
                        <LayoutInfo />
                        <div className='grid sm:grid-cols-2 gap-6'>
                            {featuredCoursesData.map((data, index) => (
                                <CourseCard2 key={index} data={data} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <ThemeButton variant="solid" theme="primary2" text="Load More" arrowType={ArrowClockwise} />
                        </div>
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                            <div className="relative">
                                <div>
                                    <input className="w-full xl:h-14 h-12 border-none ourline-none rounded bg-grey100 pt-4 pr-[72px] pb-5 pl-5 text-bodyColor placeholder-bodyColor text-base font-medium" type="search" name="search" id="search" placeholder="Search Keyword..." />
                                </div>
                                <div className="flex justify-center items-center bg-primary xl:w-14 xl:h-14 w-12 h-12 rounded-tr rounded-br absolute top-0 right-0">
                                    <MagnifyingGlass className="text-whiteShade" size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Price Filter</TitleComponent>
                            <div className="relative xl:my-8 my-5">
                                <input className="relative w-full h-1 bg-primary before:content-[''] before:absolute before:z-[1] before:top-1/2 before:left-0 before:-translate-y-1/2 before:cursor-pointer before:w-5 before:h-5 before:bg-whiteShade before:border-4 before:border-solid before:border-primary before:rounded after:content-[''] after:absolute after:z-[1] after:top-1/2 after:right-0 after:-translate-y-1/2 after:cursor-pointer after:w-5 after:h-5 after:bg-whiteShade after:border-4 after:border-solid after:border-primary after:rounded appearance-none" type="range" name="min" min="100" max="500" value="10" id="min" />
                            </div>
                            <TitleComponent size='large-bold' className="text-black">Price: 100$ - 500$</TitleComponent>
                        </div>
                        <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Categories</TitleComponent>
                            <div className="flex flex-col xl:gap-5 gap-4 mt-6">
                                {categoryData2.map((item, index) => (
                                    <Link key={index} to="#" className={`flex justify-between items-center rounded xl:pt-4 xl:px-5 xl:pb-5 py-3.5 px-4 ${index === 1 ? "bg-primary" : "bg-grey100 duration-300 hover:bg-primary"} group`}>
                                        <TitleComponent size='base-medium' className={`${index === 1 ? "text-whiteShade" : "text-bodyColor duration-300 group-hover:text-whiteShade"}`}>{item}</TitleComponent>
                                        <CaretRight className={`${index === 1 ? "text-whiteShade" : "text-bodyColor duration-300 group-hover:text-whiteShade"}`} size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Skill Level</TitleComponent>
                            <ul className="flex flex-col gap-5 mt-6">
                                {skillLevelData.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className={`flex justify-center items-center lg:w-7 lg:h-7 w-6 h-6 bg-grey100 rounded-sm cursor-pointer ${index === 1 ? "bg-primary" : "bg-grey100 duration-300 hover:bg-primary"} group`}>
                                            <Check className={`${index === 1 ? "text-whiteShade" : "text-whiteShade invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100"}`} size={16} />
                                        </div>
                                        <TitleComponent size='base-medium' className="text-bodyColor">{item.text}</TitleComponent>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Language</TitleComponent>
                            <ul className="flex flex-col gap-5 mt-6">
                                {languageData.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className={`flex justify-center items-center lg:w-7 lg:h-7 w-6 h-6 bg-grey100 rounded-sm cursor-pointer ${index === 1 ? "bg-primary" : "bg-grey100 duration-300 hover:bg-primary"} group`}>
                                            <Check className={`${index === 1 ? "text-whiteShade" : "text-whiteShade invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100"}`} size={16} />
                                        </div>
                                        <TitleComponent size='base-medium' className="text-bodyColor">{item}</TitleComponent>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
                            <TitleComponent type='h4' className="text-black">Rating By</TitleComponent>
                            <ul className="flex flex-col gap-5 mt-6">
                                {
                                    [...Array(5)].map((_, rowIndex) => {
                                        const starsToFill = fillerStar;
                                        fillerStar--;
                                        return (
                                            <li key={rowIndex} className="flex items-center gap-4">
                                                <div className="flex justify-center items-center lg:w-7 lg:h-7 w-6 h-6 bg-white200 rounded-sm cursor-pointer border border-solid border-whiteShade200 duration-300 group hover:bg-primary border-transparent">
                                                    <Check className="text-whiteShade invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100" size={16} />
                                                </div>
                                                <div className="flex items-center gap-0.5">
                                                    {
                                                        [...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                weight='fill'
                                                                size={22}
                                                                className={i < starsToFill ? "text-yellow" : "text-whiteShade200"}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesSec5
