import { useNavigate } from 'react-router-dom';
import { lecturersData } from '../../Data';
import { useLocation } from 'react-router-dom';

import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import LecturerCard from './lecturerCard';

const TeamSec = () => {
    const location = useLocation();
    const teamData = location.pathname === "/team" ? lecturersData : lecturersData.slice(0, 3);
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contact-us")
    }
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center items-center">
                    <div className="lg:col-span-1 col-span-full">
                        <SectionTitle
                            subtitle="Team Members"
                            title="Our Expert"
                            highlightedText="Lecturer"
                            headingLevel='h2'
                        />
                        <TitleComponent size='large-medium' className='text-bodyColor xl:my-10 md:mt-7 mt-6 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</TitleComponent>
                        <ThemeButton variant="split" theme="secondary" text="Join Our Team" onClick={handleClick} />
                    </div>
                    {teamData.map((data, index) => (
                        <LecturerCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSec
