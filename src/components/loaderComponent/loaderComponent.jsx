import brandLogo from '../../assets/brand-logo-dark.svg';

const LoaderComponent = () => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5 w-full h-screen z-50">
            <div className="flex">
                <img className="lg:max-w-full max-w-40 object-contain" src={brandLogo} alt="" />
            </div>
            <div className="flex justify-center items-center gap-3 bg-whiteShade">
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.1s' }}>L</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.2s' }}>E</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.3s' }}>A</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.4s' }}>R</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.5s' }}>N</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.6s' }}>I</span>
                <span className="text-black animate-moveBounce2 2xl:text-7xl lg:text-[55px] md:text-[40px] text-3xl font-lexend leading-normal font-bold" style={{ animationDelay: '0.7s' }}>X</span>
            </div>
        </div>
    )
}

export default LoaderComponent
