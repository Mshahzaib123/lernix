import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';

import pagesShape1 from '../../assets/pages1.webp';
import pagesShape2 from '../../assets/pages2.webp';
import pagesShape3 from '../../assets/pages3.webp';
import pagesShape4 from '../../assets/pages4.svg';
import pagesShape5 from '../../assets/pages5.svg';

const HeroSec4 = (props) => {
    return (
        <section className="relative bg-lightPink200 xl:pt-64 xl:pb-40 lg:pt-52 lg:pb-[120px] md:pt-[125px] md:pb-24 pt-32 pb-[75px]">
            <div className="container">
                <div className="relative z-[2] text-center">
                    <TitleComponent type='h2' className='text-black'>{props.heading}</TitleComponent>
                    <ul className="flex justify-center items-center gap-1.5 mt-3">
                        <li className="first:relative first:pr-3.5 first:after:content-[''] first:after:absolute first:after:top-3.5 first:after:right-0 first:after:w-2 first:after:h-0.5 first:after:bg-black">
                            <Link to="/" className="text-black lg:text-lg text-base font-bold duration-300 hover:text-primary">Home</Link>
                        </li>
                        <li className="first:relative first:pr-3.5 first:after:content-[''] first:after:absolute first:after:top-3.5 first:after:right-0 first:after:w-2 first:after:h-0.5 first:after:bg-black">
                            <TitleComponent size='large-bold' className='text-primary'>{props.subHeading}</TitleComponent>
                        </li>
                    </ul>
                </div>
            </div>
            <img className="absolute top-0 inset-0 mx-auto text-center lg:block hidden" src={pagesShape1} alt="" />
            <img className="absolute left-0 bottom-0 2xl:max-w-full xl:max-w-56 lg:max-w-40 max-w-32 lg:block hidden" src={pagesShape2} alt="" />
            <img className="absolute right-0 bottom-0 2xl:max-w-full xl:max-w-[440px] lg:max-w-80 max-w-72 lg:block hidden" src={pagesShape3} alt="" />
            <img className="absolute 2xl:right-[431px] 2xl:bottom-28 2xl:max-w-full xl:right-[275px] xl:bottom-32 bottom-36 right-[70px] xl:max-w-10 max-w-12 lg:block hidden" src={pagesShape4} alt="" />
            <img className="absolute 2xl:top-56 2xl:left-40 xl:top-60 xl:left-[75px] top-36 left-10 2xl:max-w-full lg:max-w-24 max-w-[75px] lg:block hidden" src={pagesShape5} alt="" />
        </section>
    )
}

export default HeroSec4
