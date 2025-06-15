import { useNavigate } from 'react-router-dom';
import { coursesData } from '../../Data';

import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import CourseCardG from './courseCardG';


const CoursesSec = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/courses-list-view")
    }
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="md:mb-12 mb-8">
                    <SectionTitle
                        subtitle="Most Featured Courses"
                        title="Choose Our Top"
                        highlightedText="Courses"
                        headingLevel='h2'
                        className='text-center'
                    />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {coursesData.map((data, index) => (
                        <CourseCardG key={index} data={data} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <ThemeButton variant="solid" theme="primary" onClick={handleClick} text="View All Courses" />
                </div>
            </div>
        </section>
    )
}

export default CoursesSec
