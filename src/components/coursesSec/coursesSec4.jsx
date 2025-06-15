import { useLocation } from 'react-router-dom';
import { coursesListData, featuredCoursesData } from '../../Data';
import { ArrowClockwise } from '@phosphor-icons/react';

import CourseCardL from './courseCardL';
import CourseCard2 from './courseCard2';
import ThemeButton from '../themeButton/themeButton';
import LayoutInfo from './layoutInfo';

const CoursesSec4 = () => {
    const location = useLocation();

    return (
        <section class="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div class="container">
                <LayoutInfo />
                {
                    location.pathname === "/courses-list-view" ? (
                        <div className="grid lg:grid-cols-2 gap-6">
                            {coursesListData.map((data, index) => (
                                <CourseCardL key={index} data={data} />
                            ))}
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                            {featuredCoursesData.map((data, index) => (
                                <CourseCard2 key={index} data={data} />
                            ))}
                        </div>
                    )
                }
                <div className="flex justify-center mt-8">
                    <ThemeButton variant="solid" theme="primary2" text="Load More" arrowType={ArrowClockwise} />
                </div>
            </div>
        </section>
    )
}

export default CoursesSec4
