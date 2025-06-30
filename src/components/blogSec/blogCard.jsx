import { Link } from 'react-router-dom';
import { ArrowRight, User, Calendar } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';

const BlogCard = ({ data }) => {
    return (
        <div className="bg-whiteShade rounded-xl shadow-boxShadow xl:py-5 xl:pb-6 xl:px-5 p-4 duration-300 group hover:-translate-y-2.5 hover:shadow-boxShadow2">
            <div className="relative">
                <Link to={`/blog-detail/${data.id}`} className="w-full overflow-hidden rounded-xl">
                    <img className="w-full duration-300 group-hover:scale-110" src={data.blogImg} alt="Blog" />
                </Link>
                <div className="absolute left-1/2 -bottom-7 2xl:w-80 xl:w-[295px] w-60 transform -translate-x-1/2">
                    <ul className="flex justify-between items-center gap-3 bg-whiteShade xl:py-4 xl:px-7 p-3.5 rounded-lg">
                        <li className="flex items-center xl:gap-5 gap-2.5 ">
                            <User className='text-primary' size={20} />
                            <TitleComponent size='small-medium' className='text-lightGrey xl:text-base'>{data.user}</TitleComponent>
                        </li>
                        <li className="flex items-center xl:gap-5 gap-2.5">
                            <Calendar className='text-primary' size={20} />
                            <TitleComponent size='small-medium' className='text-lightGrey xl:text-base'>{data.datePosted}</TitleComponent>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-12 text-center">
                <Link to={`/blog-detail/${data.id}`} className="text-black xl:text-2xl lg:text-xl text-[22px] leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <div className="mt-5">
                    <Link to={`/blog-detail/${data.id}`} className="flex items-center justify-center gap-2 duration-300 group/btn">
                        <TitleComponent size='base-semibold' className='uppercase text-bodyColor duration-300 group-hover/btn:text-primary'>Read More</TitleComponent>
                        <ArrowRight className='text-bodyColor duration-300 group-hover/btn:text-primary' weight='bold' size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard