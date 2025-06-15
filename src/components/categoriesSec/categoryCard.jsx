import { useLocation } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';

import categoryBgShape from '../../assets/categories-bg-shape.svg';

const CategoryCard = ({ data, bgColor = "" }) => {
    const location = useLocation();
    const bgColorMap = {
        lightGreen: 'bg-lightGreen',
        lightPink100: 'bg-lightPink100',
    };
    const resolvedBg = bgColorMap[bgColor];

    return (
        <div to='/' className={`flex justify-center items-center flex-col ${resolvedBg} rounded-xl ${location.pathname !== "/homepage2" ? "md:p-7 p-5 duration-300 group hover:-translate-y-2.5" : "p-5"} `}>
            <div className="relative">
                <img className={`${location.pathname === '/homepage2' ? "max-w-[90px]" : ""}`} src={categoryBgShape} alt="" />
                <img className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${location.pathname === '/homepage2' ? "max-w-14" : "max-w-full"}`} src={data.image} alt="Category Icon" />
            </div>
            <h4 to='/' className={`xl:text-2xl lg:text-xl text-lg leading-normal font-bold text-center text-black ${location.pathname === '/homepage2' ? "mt-4 mb-2.5" : "md:mt-[30px] md:mb-3 mt-5 mb-2.5"}`}>{data.heading}</h4>
            <TitleComponent size='large-medium' className='text-lightGrey'>{data.course}</TitleComponent>
        </div>
    )
}

export default CategoryCard
