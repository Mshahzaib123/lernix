import { instructorsData } from '../../Data';
import InstructorCard from './instructorCard';
import SectionTitle from '../sectionTitle/sectionTitle';

import shape10 from '../../assets/shape10.svg';
import shape11 from '../../assets/shape11.svg';

const TeamSec2 = () => {
    return (
        <section className="relative bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <SectionTitle
                    subtitle="Team Members"
                    title="Meet Out"
                    highlightedText="Instructors"
                    headingLevel='h2'
                    className='text-center md:mb-12 mb-8'
                />
                <div className='relative grid gap-6 lg:grid-cols-4 sm:grid-cols-2 z-[2]'>
                    {instructorsData.slice(4, 8).map((data, index) => (
                        <InstructorCard key={index} data={data} />
                    ))}
                </div>
            </div>
            <img class="absolute xl:top-28 xl:left-16 top-16 left-10 lg:block hidden" src={shape10} alt="" />
            <img class="absolute xl:bottom-[75px] xl:right-16 bottom-10 right-14 animate-rotateMe lg:block hidden" src={shape11} alt="" />
        </section>
    )
}

export default TeamSec2
