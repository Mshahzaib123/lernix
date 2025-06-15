import TitleComponent from '../titleComponent/titleComponent';

const TestimonialSCard = ({ data }) => {
    return (
        <div className="bg-whiteShade lg:p-7 p-4 rounded-lg shadow-boxShadow">
            <img src={data.quoteSvg} alt="" />
            <TitleComponent type='h6' className='text-black !font-bold lg:mt-8 lg:mb-4 mt-5 mb-3'>{data.heading}</TitleComponent>
            <TitleComponent size='large-medium' className='text-bodyColor text-sm'>{data.desc}</TitleComponent>
            <div className="grid grid-cols-[auto_1fr] lg:gap-5 gap-4 items-center mt-5">
                <img className="lg:w-16 lg:h-16 w-12 h-12 object-center object-cover rounded-full" src={data.profileImg} alt="" />
                <div>
                    <TitleComponent type='h6' className='text-black !font-semibold'>{data.userName}</TitleComponent>
                    <TitleComponent size='large-medium' className='text-bodyColor lg:mt-1.5 mt-0.5'>{data.status}</TitleComponent>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSCard
