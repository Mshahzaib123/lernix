import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { featuredCoursesData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import CourseCard2 from './courseCard2';

import shape15 from '../../assets/shape15.svg';

const CoursesSec2 = () => {
    const [activeTab, setActiveTab] = useState('See All');
    const tabs = ['See All', 'Marketing', 'Design', 'Finance'];
    const filteredCourses = activeTab === 'See All'
        ? featuredCoursesData.slice(0, 6)
        : featuredCoursesData.slice(0, 6).filter(course => {
            if (activeTab === 'Design') {
                return course.category === 'Design' || course.category === 'Art & Design';
            }
            return course.category === activeTab;
        });
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/courses-list-view")
    }
    return (
        <section className="relative bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex gap-y-6 justify-between lg:items-end lg:flex-row flex-col md:mb-12 mb-8">
                    <SectionTitle
                        subtitle="Most Featured Courses"
                        title="Choose Our Top"
                        highlightedText="Courses"
                        headingLevel='h2'
                    />
                    <div className="flex items-center lg:gap-8 gap-6 md:flex-nowrap flex-wrap">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-bodyColor border-none bg-transparent lg:text-lg text-base font-bold duration-300 hover:text-primary ${activeTab === tab ? 'text-primary' : ''}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {filteredCourses.map((data, index) => (
                        <CourseCard2 key={index} data={data} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <ThemeButton variant="solid" theme="primary" onClick={handleClick} text="View All Courses" />
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

export default CoursesSec2
