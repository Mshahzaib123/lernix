import { testimonial2Data } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import TestimonialMCard from './testimonialMCard';
import TestimonialSCard from './testimonialSCard';

const TestimonialSec2 = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="max-w-[560px] mt-0 mx-auto md:mb-12 mb-8">
                    <SectionTitle
                        subtitle="Testimonials"
                        title="Hear What Our Learners Have"
                        highlightedText="To Say"
                        headingLevel='h2'
                        className='text-center'
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonial2Data.map((data, index) => (
                        index === 1 ?
                            <TestimonialMCard key={index} data={data} />
                            : <TestimonialSCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSec2
