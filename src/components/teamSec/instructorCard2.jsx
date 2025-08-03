import { Link } from 'react-router-dom';
import { Plus } from '@phosphor-icons/react';
import { socialData } from '../../Data';
import TitleComponent from '../titleComponent/titleComponent';

const InstructorCard2 = ({ data, className }) => {
    return (
        <div className={`${className} duration-300 group`}>
            <Link to={`/team-detail/${data.id}`}>
                <img src={data.img} alt="" />
            </Link>
            <div className="flex justify-between items-center mt-6">
                <div>
                    <Link to={`/team-detail/${data.id}`}>
                        <TitleComponent type='h6' className='text-black !font-bold duration-300 hover:text-primary'>{data.name}</TitleComponent>
                    </Link>
                    <TitleComponent size='base-medium' className='text-bodyColor xl:mt-2.5 mt-1.5'>{data.designation}</TitleComponent>
                </div>
                <div className="relative duration-300 group/share hover:scale-y-100">
                    <div className="flex justify-center items-center xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-14 md:h-14 w-12 h-12 bg-lightPink100 rounded cursor-pointer">
                        <Plus className='text-primary' weight='bold' size={24} />
                    </div>
                    <div className="absolute bottom-0 left-0 origin-bottom scale-y-0 duration-300 group-hover/share:scale-y-100">
                        <ul className="overflow-hidden rounded">
                            {socialData.slice(0, 3).map((item, index) => (
                                <li key={index} className="border-b-1 last:border-b-0 border-b-solid boder-b-whiteShade">
                                    <Link to={item.path} className="flex justify-center items-center xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-14 md:h-14 w-12 h-12 bg-primary duration-300 hover:bg-primaryDark">
                                        <item.icon className='text-white' size={24} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard2
