import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/titleComponent';

const StudentSlide = ({ data }) => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <TitleComponent size='large-medium' className='text-bodyColor text-justify 2xl:mt-10 2xl:mb-11 md:my-7 my-6 mx-0'>{data.stdReview}</TitleComponent>
            <div className="flex items-center gap-x-5">
                <Link to="#" onClick={scrollTop}>
                    <img className="md:w-[60px] md:h-[60px] w-12 h-12 rounded-full" src={data.stdImg} alt="" />
                </Link>
                <div>
                    <TitleComponent type='h5' className='text-black'>{data.stdName}</TitleComponent>
                    <TitleComponent size='base-medium' className='text-bodyColor max-xl:text-sm mt-1'>{data.status}</TitleComponent>
                </div>
            </div>
        </>
    )
}

export default StudentSlide
