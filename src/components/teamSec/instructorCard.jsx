import { Link } from 'react-router-dom';
import { ShareNetwork } from '@phosphor-icons/react';
import { socialData } from '../../Data';
import TitleComponent from '../titleComponent/titleComponent';

const InstructorCard = ({ data }) => {
    return (
        <div>
            <div className="rounded-lg bg-darkBlue2 md:pt-10 md:pb-36 pt-8 px-5 pb-32">
                <TitleComponent type='h6' className='text-whiteShade !font-bold'>{data.name}</TitleComponent>
                <TitleComponent size='base-medium' className='text-whiteShade md:mt-2.5 mt-1'>{data.designation}</TitleComponent>
            </div>
            <div className="relative -mt-28 mx-5">
                <Link to={`/team-detail/${data.id}`} className="flex">
                    <img className="rounded-xl w-full" src={data.img} alt="" />
                </Link>
                <div className="absolute top-0 right-5 z-50 duration-300 group">
                    <div className="absolute -top-7 right-0 flex justify-center items-center xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-14 md:h-14 w-12 h-12 bg-primary rounded cursor-pointer visible opacity-100 duration-300 group-hover:top-0">
                        <ShareNetwork className='text-white' weight='fill' size={24} />
                    </div>
                    <div className="absolute top-0 right-0 overflow-hidden rounded-b scale-y-0 origin-top opacity-0 invisible duration-300 group-hover:scale-y-100 group-hover:visible group-hover:opacity-100">
                        {socialData.slice(0, 3).map((item, index) => (
                            <Link key={index} to={item.path} className="flex justify-center items-center xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-14 md:h-14 w-12 h-12 bg-primary duration-300 hover:bg-primaryDark">
                                <item.icon className='text-white' weight='bold' size={24} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard
