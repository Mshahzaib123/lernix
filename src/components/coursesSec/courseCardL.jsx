import { Link } from 'react-router-dom';
import { Note, Users } from '@phosphor-icons/react';

import TitleComponent from '../titleComponent/titleComponent';

const CourseCardL = ({ data }) => {
    return (
        <div className="grid sm:grid-cols-[auto_1fr] items-center gap-6 xl:p-7 p-6 bg-white rounded-lg border-b-3 border-b-solid border-b-transparent shadow-boxShadow transform duration-300 group hover:-translate-y-2.5 hover:border-b-primary">
            <Link to={`/courses-detail/${data.id}`} className="overflow-hidden rounded">
                <img className="sm:w-40 w-full h-40 object-cover transform duration-300 group-hover:scale-110" src={data.img} alt="" />
            </Link>
            <div className="content">
                <div className="flex justify-between items-center">
                    <TitleComponent size='small-bold' className='text-primary xl:text-xl duration-300 group-hover:text-secondary'>{data.price}</TitleComponent>
                    <div className="flex items-center gap-0.5">
                        {data.ratingStar.map((item, index) => (
                            <item.icon key={index} className='text-yellow' weight={item.style} size={18} />
                        ))}
                    </div>
                </div>
                <Link to={`/courses-detail/${data.id}`} className="text-black xl:mt-5 xl:mb-6 my-4 2xl:text-2xl xl:text-[22px] text-lg leading-normal font-bold duration-300 hover:text-primary">{data.heading}</Link>
                <ul className="flex items-center justify-between">
                    <li className="flex items-center xl:gap-x-4 gap-x-2">
                        <Note className='text-bodyColor' weight='bold' size={22} />
                        <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{`${data.lessons} Lessons`}</TitleComponent>
                    </li>
                    <li className="flex items-center xl:gap-x-4 gap-x-2">
                        <Users className='text-bodyColor' weight='bold' size={22} />
                        <TitleComponent size='small-medium' className='text-bodyColor xl:text-base'>{`${data.strength} Students`}</TitleComponent>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CourseCardL
