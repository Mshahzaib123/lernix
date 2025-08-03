import { useNavigate } from 'react-router-dom';
import ThemeButton from '../themeButton/themeButton';
import TitleComponent from '../titleComponent/titleComponent';

import newsletterImg1 from '../../assets/testimonial14.webp';
import newsletterImg2 from '../../assets/testimonial15.webp';
import newsletterImg3 from '../../assets/testimonial16.webp';
import newsletterImg4 from '../../assets/testimonial17.webp';

const NewlstterSec3 = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/about")
    }
    return (
        <section className="relative bg-black before:absolute before:content-[''] before:z-[9] before:w-full before:h-1/2 before:bg-lightPink200 before:top-0 before:left-0">
            <div className="container">
                <div className="relative z-[10] bg-secondary rounded-xl px-2.5">
                    <div className="xl:max-w-[770px] max-w-[570px] mx-auto text-center lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
                        <TitleComponent type='h2' className='text-whiteShade'>Ready to Elevate Your Skills? Join Our Courses Today</TitleComponent>
                        <TitleComponent size='large-medium' className='text-whiteShade xl:text-xl xl:mt-8 xl:mb-10 mt-5 mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</TitleComponent>
                        <div className="flex justify-center items-center">
                            <ThemeButton variant="split" theme="secondary2" text="Enroll Now" onClick={handleClick} />
                        </div>
                    </div>
                    <img className='absolute top-8 left-8 w-36 h-36 lg:block hidden' src={newsletterImg1} alt="" />
                    <img className='absolute top-8 right-8 w-48 h-24 lg:block hidden' src={newsletterImg2} alt="" />
                    <img className='absolute bottom-8 left-8  w-48 h-24 lg:block hidden' src={newsletterImg3} alt="" />
                    <img className='absolute bottom-8 right-8 w-36 h-36 rounded-full lg:block hidden' src={newsletterImg4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default NewlstterSec3
