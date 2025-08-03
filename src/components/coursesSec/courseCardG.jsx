import { Link } from 'react-router-dom';
import { Users, Heart, ArrowRight } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';

const CourseCardG = ({ data }) => {
    return (
        <div className="shadow-boxShadow rounded-xl overflow-hidden duration-300 hover:shadow-boxShadow2">
            <div className="relative overflow-hidden group/image">
                <Link to={`/courses-detail/${data.id}`} className='w-full'>
                    <img className="inline-block duration-500 group-hover/image:scale-105" src={data.img} alt="Course 1" />
                </Link>
                <div className="absolute -bottom-12 left-7 duration-500 group-hover/image:bottom-0">
                    <TitleComponent size='large-medium' className='bg-primary rounded-t-2xl py-2 px-3 text-whiteShade'>{data.price}</TitleComponent>
                </div>
            </div>
            <div className="2xl:py-7 2xl:px-6 p-5">
                <div className="flex items-center justify-between 2xl:mb-6 mb-5">
                    <TitleComponent size='small-medium' className="relative py-2 xl:px-4 px-3 bg-grey100 rounded md:text-base text-greyShade z-[1] cursor-pointer duration-300 hover:bg-primary hover:text-whiteShade">{data.level}</TitleComponent>
                    <div className="relative z-[1] flex justify-center items-center xl:w-10 xl:h-10 w-9 h-9 bg-grey100 rounded cursor-pointer duration-300 hover:bg-primary group">
                        <Heart className='text-bodyColor duration-300 group-hover:text-whiteShade' weight='bold' size={16} />
                    </div>
                </div>

                <Link to={`/courses-detail/${data.id}`} className="2xl:text-2xl xl:text-xl text-lg font-KumbhSans leading-normal font-bold text-black duration-300 hover:text-primary">{data.heading}</Link>
                <div className="flex items-center gap-3 mt-4 mb-5">
                    <TitleComponent size='base-medium' className='max-xl:text-sm text-bodyColor2'>({`${data.rating} rating`})</TitleComponent>
                    <ul className="flex items-center gap-0.5">
                        {data.ratingStar.map((item, index) => (
                            <li key={index}>
                                <item.icon className='flex text-primary' weight={item.style} size={18} />
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/" className="flex items-center xl:gap-5 gap-4 2xl:mb-7 mb-5 ">
                    <img className="xl:w-12 xl:h-12 w-10 h-10 rounded-full object-cover" src={data.instructorImg} alt="Profile" />
                    <TitleComponent size='base-medium' className='max-xl:text-base'>{data.instructorName}</TitleComponent>
                </Link>
                <div className="flex items-center justify-between pt-5 border-t-[1px] border-solid border-greyLight">
                    <div className="flex items-center gap-3">
                        <Users className='text-primary' weight='fill' size={18} />
                        <TitleComponent type='p' size='base-medium' className='text-bodyColor2 md:text-base text-sm'>{`${data.strength} Students`}</TitleComponent>
                    </div>
                    <Link className="flex items-center gap-2 group" to='/courses-detail'>
                        <TitleComponent size='base-semibold' className='uppercase md:text-base text-sm text-black duration-300 group-hover:text-primary'>Enroll Now</TitleComponent>
                        <ArrowRight className='text-black duration-300 group-hover:text-primary' weight='bold' size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCardG
