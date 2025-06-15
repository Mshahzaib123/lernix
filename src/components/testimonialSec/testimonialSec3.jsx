import SectionTitle from '../sectionTitle/sectionTitle';
import SliderComponenet from './slideComponent';

import testimonialImg3 from '../../assets/testimonial-image3.webp';

const TestimonialSec3 = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex gap-y-6 gap-x-3 items-center lg:flex-row flex-col">
                    <div className="lg:w-2/5 w-full">
                        <SectionTitle
                            subtitle="Testimonials"
                            title="Voices of Success: Hear from Our"
                            highlightedText="Students"
                            headingLevel='h2'
                        />
                        <SliderComponenet />
                    </div>
                    <div className="lg:w-3/5 w-full 2xl:ml-14">
                        <img src={testimonialImg3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSec3
