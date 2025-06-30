import SectionTitle from '../sectionTitle/sectionTitle';
import SliderComponenet from './slideComponent';

import testimonialImg from '../../assets/testimonial1.webp';

const TestimonialSec = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <div className='flex justify-center'>
                        <img src={testimonialImg} alt="" />
                    </div>
                    <div className="self-center">
                        <SectionTitle
                            subtitle="Testimonials"
                            title="Voices of Success: Hear from Our"
                            highlightedText="Students"
                            headingLevel='h2'
                        />
                        <SliderComponenet />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSec
