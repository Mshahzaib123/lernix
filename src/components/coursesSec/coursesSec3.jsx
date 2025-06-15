import { useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import CourseCardL from './courseCardL';
import { coursesListData } from '../../Data';

const CoursesSec3 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/courses-list-view")
    }
    return (
        <section className="bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex md:items-end items-start justify-between md:gap-y-0 gap-y-6 md:flex-row flex-col md:mb-12 mb-7">
                    <SectionTitle
                        subtitle="Most Featured Courses"
                        title="Choose Our Top"
                        highlightedText="Courses"
                        headingLevel='h2'
                    />
                    <ThemeButton variant="solid" theme="primary2" onClick={handleClick} text="Explore All Courses" />
                </div>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {
                        location.pathname === '/homepage3' ?
                            coursesListData.slice(0, 6).map((data, index) => (
                                <CourseCardL key={index} data={data} />
                            ))
                            :
                            coursesListData.map((data, index) => (
                                <CourseCardL key={index} data={data} />
                            ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CoursesSec3
