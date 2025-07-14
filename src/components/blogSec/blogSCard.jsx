import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';

const BlogSCard = ({ data }) => {
    return (
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 2xl:p-8 sm:p-6 p-4 border-b-3 border-b-solid border-b-transparent bg-whiteShade rounded-lg shadow-boxShadow duration-500 group hover:border-primary hover:shadow-boxShadow2">
            <Link to={`/blog-detail/${data.id}`} className="rounded-lg overflow-hidden">
                <img className="xl:w-48 xl:h-48 w-36 h-36 transform duration-500 group-hover:scale-110" src={data.blogImg} alt="" />
            </Link>
            <div>
                <div className="flex justify-between items-center">
                    <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{data.datePosted}</TitleComponent>
                    <TitleComponent size='small-medium' className='bg-black rounded 2xl:py-2 2xl:px-3 p-2 text-whiteShade xl:text-base'>{data.field}</TitleComponent>
                </div>
                <Link to={`/blog-detail/${data.id}`} className="text-black 2xl:my-5 my-4 2xl:text-2xl md:text-xl text-lg leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <TitleComponent size='base-medium' className='text-bodyColor overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>{data.desc}</TitleComponent>
            </div>
        </div>
    )
}

export default BlogSCard
