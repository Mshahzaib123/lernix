import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';

const BlogMCard = ({ data }) => {
    return (
        <div className="bg-whiteShade rounded-lg shadow-boxShadow border-b-3 border-b-solid border-b-transparent 2lx:p-8 md:p-6 p-4 duration-500 group hover:border-b-primary hover:shadow-boxShadow2">
            <Link to={`/blog-detail/${data.id}`} className="rounded-lg overflow-hidden">
                <img className="transform duration-500 group-hover:scale-110" src={data.blogImg} alt="" />
            </Link>
            <div className="2xl:mt-8 mt-6">
                <div className="flex justify-between items-center">
                    <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{data.datePosted}</TitleComponent>
                    <TitleComponent size='small-medium' className='bg-black rounded 2xl:py-2.5 2xl:px-3 p-2 text-whiteShade xl:text-base'>{data.field}</TitleComponent>
                </div>
                <Link to={`/blog-detail/${data.id}`} className="text-black 2xl:my-5 my-4 2xl:text-2xl md:text-xl text-lg leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <TitleComponent size='base-medium' className='text-bodyColor overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>{data.desc}</TitleComponent>
            </div>
        </div>
    )
}

export default BlogMCard
