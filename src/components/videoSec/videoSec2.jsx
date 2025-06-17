import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';

import videoShape from '../../assets/video-shape.svg';

const VideoSec2 = () => {
    return (
        <section className="relative before:content-[''] before:absolute before:bottom-1/2 before:bg-black before:w-full before:h-1/2 before:-z-[1]">
            <div className="container">
                <div className="bg-videoBg2 bg-no-repeat bg-center bg-cover rounded-xl lg:p-16 p-10">
                    <div className="flex justify-center items-center gap-6 sm:flex-row flex-col">
                        <div className="sm:w-1/3 w-full">
                            <h1 className="text-center stroker 2xl:text-[100px] xl:text-[70px] lg:text-6xl text-5xl font-lexend leading-normal uppercase text-transparent">INTRO</h1>
                        </div>
                        <div className="xl:w-[336px] md:w-60 sm:w-1/3 w-full relative flex justify-center">
                            <img className="animate-borderTransform" src={videoShape} alt="" />
                            <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center xl:w-[104px] xl:h-[104px] md:w-20 md:h-20 w-[75px] h-[75px] rounded-full bg-whiteShade after:content-[''] after:absolute after:-top-3.5 after:-bottom-3.5 after:-left-3.5 after:-right-3.5 after:inset-3.5 after:border after:border-solid after:border-whiteShade after:rounded-[152px] after:opacity-15 after:animate-ripple">
                                <Play className='text-black' size={24} weight='fill' />
                            </Link>
                        </div>
                        <div className="sm:w-1/3 w-full">
                            <h1 className="stroker text-center 2xl:text-[100px] xl:text-[70px] lg:text-6xl text-5xl font-lexend leading-normal uppercase text-transparent">VIDEO</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSec2
