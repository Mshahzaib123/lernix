import { useNavigate } from 'react-router-dom';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

import testimonialNextImg from '../../assets/testimonials-next.webp'

const TestimonialNextSec = () => {
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate("/about")
    }
    const handleClick2 = () => {
        navigate("/contact-us")
    }
    return (
        <section>
            <div className="container">
                <div className="relative bg-lightPink300 rounded-xl px-4 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
                    <div className="mx-auto text-center relative z-[2] max-w-[700px] w-full">
                        <SectionTitle
                            subtitle="Testimonials"
                            title="Take the Next Step: Start Your Digital Journey"
                            highlightedText="Today"
                            headingLevel='h2'
                        />
                        <TitleComponent size='large-semibold' className='my-8 text-bodyColor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</TitleComponent>
                        <div className="flex items-start justify-center flex-wrap md:gap-10 gap-y-3 gap-x-6">
                            <ThemeButton variant="split" theme="secondary" text="Enroll Now" onClick={handleClick1} />
                            <ThemeButton variant="solid" theme="primary" text="Contact Us" onClick={handleClick2} />
                        </div>
                    </div>
                    <img className="absolute w-full h-full top-0 left-0 xl:block hidden" src={testimonialNextImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TestimonialNextSec
