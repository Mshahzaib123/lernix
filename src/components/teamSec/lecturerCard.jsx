import { Link } from 'react-router-dom';
import { socialData } from '../../Data';
import TitleComponent from '../titleComponent/titleComponent';

const LecturerCard = ({ data }) => {
    return (
        <div className="border-2 border-dashed border-primary rounded-xl xl:p-5 p-4 group">
            <Link to={`/team-detail/${data.id}`} className="rounded-xl overflow-hidden">
                <img className="w-full object-center duration-500 group-hover:scale-105" src={data.img} alt="Team" />
            </Link>
            <div className="text-center md:pt-6 pt-5">
                <Link to={`/team-detail/${data.id}`} className="lg:text-lg text-base text-black font-bold duration-300 hover:text-primary">{data.name}</Link>
                <TitleComponent size='base-medium' className='text-bodyColor mt-1.5 mb-4'>{data.designation}</TitleComponent>
                <ul className="flex justify-center items-center gap-5">
                    {socialData.slice(0, 3).map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="flex justify-center items-center w-9 h-9 bg-primary rounded-full duration-300 group hover:bg-black">
                                <item.icon className='text-xl text-whiteShade duration-300' size={20} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LecturerCard
