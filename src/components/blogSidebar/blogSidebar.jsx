import { Link } from 'react-router-dom'
import { instaFeedData, recentBlogData, tagsData } from '../../Data'
import TitleComponent from '../titleComponent/titleComponent'
import SearchBox from './searchBox'
import CategoryBox from './categoryBox'

import instagramIcon from '../../assets/instagram-icon.svg';

const BlogSidebar = () => {
    return (
        <div className="lg:w-1/3 flex flex-col gap-6">
            <SearchBox />
            <CategoryBox />
            <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                <TitleComponent type='h4' className="text-black">Recent Blogs</TitleComponent>
                <ul className="flex flex-col gap-8 mt-5">
                    {recentBlogData.map((item, index) => (
                        <li key={index} className="grid 2xs:grid-cols-[auto_1fr] gap-4 items-center pb-8 last:pb-0 last:border-b-0 border-b border-solid border-greyLight">
                            <Link to={item.path} className="img_inr">
                                <img className="w-20 h-[86px] object-cover rounded" src={item.img} alt="" />
                            </Link>
                            <div className="flex flex-col">
                                <Link to="#" className="text-black xl:text-lg text-base font-semibold duration-300 hover:text-primary">{item.title}</Link>
                                <Link to="#" className="mt-2 text-secondary text-base font-medium duration-300 hover:text-primary">Read More</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                <TitleComponent type='h4' className="text-black">Popular Tags</TitleComponent>
                <div className="flex items-center xl:gap-x-2.5 xl:gap-y-4 gap-x-1.5 gap-y-2.5 flex-wrap mt-6">
                    {tagsData.map((item, index) => (
                        <Link key={index} to="#" className={`bg-grey100 py-1 px-3 xl:text-lg sm:text-base text-sm font-medium ${index === 1 ? "bg-primary text-white" : "text-bodyColor duration-300 hover:bg-primary hover:text-white"}`}>{item}</Link>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
                <TitleComponent type='h4' className="text-black">Instagram Feed</TitleComponent>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] xl:gap-x-4 xl:gap-y-5 gap-x-2.5 gap-y-3 mt-6">
                    {instaFeedData.map((item, index) => (
                        <Link key={index} to="#" className="relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:invisible before:opacity-0 before:rounded before:duration-300 duration-300 group hover:before:visible hover:before:opacity-30">
                            <img className="w-full h-[90px] rounded object-cover" src={item.image} alt="" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-90">
                                <img className="w-7 h-7 object-contain" src={instagramIcon} alt="" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar
