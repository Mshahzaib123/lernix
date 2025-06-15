import { instructorsData } from '../../Data';

import InstructorCard2 from './instructorCard2';
import SectionTitle from '../sectionTitle/sectionTitle';

const TeamSec3 = () => {
    return (
        <section className="team_sec lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <SectionTitle
                    subtitle="Team Members"
                    title="Meet Out"
                    highlightedText="Instructors"
                    headingLevel='h2'
                    className='md:mb-12 mb-8 text-center'
                />
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
                    {instructorsData.slice(0, 4).map((data, index) => (
                        <InstructorCard2 key={index} data={data} className={index % 2 === 0 ? "lg:mt-6" : "mt-0"} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSec3
