import { Link, useLocation } from 'react-router-dom'
import TitleComponent from '../titleComponent/titleComponent';

import adminSvg from '../../assets/admin.svg';
import calendar2 from '../../assets/calendar2.svg';

const BlogCard2 = ({ data, className }) => {
    const location = useLocation();

    return (
        <div className={`bg-white rounded-xl shadow-boxShadow ${className}`}>
            <div className="relative">
                <Link to={`/blog-detail/${data.id}`} className="w-full overflow-hidden rounded-tl-xl rounded-tr-xl duration-300 group">
                    <img className="w-full duration-300 group-hover:scale-110" src={data.blogImg} alt="" />
                </Link>
                <div className="absolute top-6 left-6">
                    <TitleComponent size='base' className="bg-secondary rounded py-1.5 px-2.5 text-whiteShade">{data.category}</TitleComponent>
                </div>
            </div>
            <div className="rounded-bl-xl rounded-br-xl xl:p-7 p-5">
                <ul className="flex items-center gap-10">
                    <li className="flex items-center gap-2">
                        <div className="flex justify-center items-center w-5 h-5">
                            <img className="w-full h-full" src={adminSvg} alt="" />
                        </div>
                        <Link to="#" className="text-bodyColor md:text-base text-sm font-medium duration-300 hover:text-primary">{data.user}</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="lex justify-center items-center w-5 h-5">
                            <img className="w-full h-full" src={calendar2} alt="" />
                        </div>
                        <TitleComponent size='small-medium' className="text-bodyColor md:text-base">{data.datePosted}</TitleComponent>
                    </li>
                </ul>
                <Link to={`/blog-detail/${data.id}`} className={`my-5 text-black ${(location.pathname === "/blog-standard" || location.pathname === "/category") ? "2xl:text-4xl xl:text-3xl md:text-2xl text-xl" : "xl:text-2xl text-lg"} leading-normal font-bold duration-300 hover:text-primary`}>{data.heading}</Link>
                {
                    (location.pathname === "/blog-standard" || location.pathname === "/category") &&
                    <TitleComponent size='base-medium' className="mb-4 text-bodyColor">{data.desc}</TitleComponent>
                }
                <Link to={data.path} className="relative text-bodyColor lg:text-lg text-base font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black after:duration-300 duration-300 hover:text-black hover:after:w-full">Read More</Link>

            </div>
        </div>
    )
}

export default BlogCard2
