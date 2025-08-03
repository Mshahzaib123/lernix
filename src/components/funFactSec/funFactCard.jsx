import TitleComponent from '../titleComponent/titleComponent';

const FunFactCard = ({ data }) => {
    return (
        <div className="lg:w-1/4 sm:w-1/2 relative overflow-hidden flex gap-x-5 items-center border-s-[1px] border-solid border-white 2xl:py-24 xl:py-[76px] py-[70px] sm:ml-0 ml-3 group">
            <div className="absolute top-0 left-0 w-full h-full bg-darkBlue bg-no-repeat bg-center bg-cover bg-blend-multiply duration-500 opacity-0 invisible group-hover:scale-110 group-hover:visible group-hover:opacity-100" style={{ backgroundImage: `url(${data.bgImage})` }} />
            <div className="relative flex justify-center items-center bg-whiteShade rounded-r-full xl:w-24 w-[70px] xl:h-24 h-[70px] z-[1]">
                <img className="xl:max-w-12 max-w-8" src={data.image} alt="" />
            </div>
            <div className="relative z-20">
                <TitleComponent type='h3' className='text-whiteShade text-2xl'>{data.strength}</TitleComponent>
                <TitleComponent size='small-medium' className='text-whiteShade 2xl:text-lg xl:text-base'>{data.heading}</TitleComponent>
            </div>
        </div>
    )
}

export default FunFactCard