import TitleComponent from '../titleComponent/titleComponent';

const TestimonialMCard = ({ data }) => {
    return (
        <div className="md:col-span-2 grid sm:grid-cols-[auto_1fr] items-center lg:gap-11 gap-4 lg:p-7 p-4 bg-whiteShade rounded-lg shadow-boxShadow">
            <img className="lg:w-[270px] lg:h-[270px] w-36 h-36 object-center object-cover rounded-full " src={data.profileImg} alt="" />
            <div>
                <img className="lg:max-w-16 max-w-10" src={data.quoteSvg} alt="" />
                <TitleComponent type='h4' className='text-black xl:my-7 lg:my-6 my-4 xl:text-[22px] md:text-xl text-lg'>{data.desc}</TitleComponent>
                <TitleComponent type='h6' className='text-black font-semibold'>{data.userName}</TitleComponent>
                <TitleComponent size='large-medium' className='text-bodyColor md:mt-1.5 mt-0.5'>{data.status}</TitleComponent>
            </div>
        </div>
    )
}

export default TestimonialMCard
