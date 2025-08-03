import { Link, useLocation } from 'react-router-dom';
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
        <Link to='#' className={`flex justify-center items-center flex-col ${resolvedBg} rounded-xl ${location.pathname !== "/homepage2" ? "md:p-7 p-5 duration-300 group hover:shadow-boxShadow" : "p-5"} `}>
            <img className={`${location.pathname === '/homepage2' ? "max-w-14" : "max-w-full"}`} src={data.image} alt="Category Icon" />
            <h4 to='#' className={`xl:text-2xl lg:text-xl text-lg leading-normal font-bold text-center text-black ${location.pathname === '/homepage2' ? "mt-4 mb-2.5" : "md:mt-[30px] md:mb-3 mt-5 mb-2.5"}`}>{data.heading}</h4>
            <TitleComponent size='large-medium' className='text-lightGrey'>{data.course}</TitleComponent>
        </Link>
    )
}

export default CategoryCard
