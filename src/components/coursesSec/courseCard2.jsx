import { Link } from 'react-router-dom';
import { Note, Clock, Star } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';

const CourseCard2 = ({ data }) => {
    return (
        <div className="shadow-boxShadow rounded-xl overflow-hidden border-b-5 border-solid border-transparent duration-300 group hover:border-primary hover:shadow-boxShadow2 hover:-translate-y-2.5">
            <div className="relative overflow-hidden duration-300 group/image">
                <Link to={`/courses-detail/${data.id}`} className="block">
                    <img className="object-cover w-full duration-300 group-hover/image:scale-110" src={data.img} alt="" />
                </Link>
                <div className="absolute 2xl:top-6 2xl:right-6 top-4 right-4">
                    <TitleComponent size='base-medium' className='bg-secondary text-white py-1.5 px-3 rounded 2xl:text-lg'>{data.category}</TitleComponent>
                </div>
            </div>
            <div className="2xl:py-6 2xl:px-8 py-3.5 px-5 bg-whiteShade">
                <TitleComponent size='base-medium' className='text-secondary xl:text-lg 2xl:text-xl'>{data.price}</TitleComponent>
                <Link to={`/courses-detail/${data.id}`} className="text-black 2xl:mt-5 2xl:mb-4 mt-4 mb-5 xl:text-2xl lg:text-xl text-lg leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <ul className="flex justify-between items-center">
                    <li className="flex items-center gap-x-2">
                        <Note className='text-primary' size={18} />
                        <TitleComponent size='small-medium' className='text-bodyColor 2xl:text-lg'>Lessons</TitleComponent>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <Clock className='text-primary' size={18} />
                        <TitleComponent size='small-medium' className='text-bodyColor 2xl:text-lg'>{data.runtime}</TitleComponent>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <Star className='text-primary' size={18} />
                        <TitleComponent size='small-medium' className='text-bodyColor 2xl:text-lg'>{data.rating}</TitleComponent>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CourseCard2
