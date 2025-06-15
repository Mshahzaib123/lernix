import { Link } from 'react-router-dom';
import { FileText, ChatCircleDots } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';

const NewsCard = ({ data }) => {
    return (
        <div className="bg-whiteShade rounded-xl shadow-boxShadow">
            <Link to={`/blog-detail/${data.id}`} className="block overflow-hidden rounded-lg xl:mx-8 xl:mt-8 xl:mb-6 m-5 group/image">
                <img className="w-full object-cover transform duration-500 group-hover/image:scale-110" src={data.blogImg} alt="" />
            </Link>
            <div>
                <Link to={`/blog-detail/${data.id}`} className="xl:mx-8 mx-6 text-black 2xl:text-4xl xl:text-3xl md:text-2xl text-xl leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <ul className="flex justify-between items-center mt-6 xl:px-8 xl:pt-6 xl:pb-6 p-5 border-t-[1px] border-solid border-greyLight">
                    <li className="flex items-center lg:gap-4 gap-2">
                        <FileText className='text-bodyColor' size={22} />
                        <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{data.datePosted}</TitleComponent>
                    </li>
                    <li className="flex items-center lg:gap-4 gap-2">
                        <ChatCircleDots className='text-bodyColor' size={22} />
                        <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{`Comments (${data.comment})`}</TitleComponent>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NewsCard
