import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';

import videoShape from '../../assets/video-shape.svg';

const VideoSec = () => {
    return (
        <section>
            <div className="container">
                <div className="bg-videoBg bg-no-repeat bg-center bg-cover rounded-xl lg:p-16 p-10">
                    <div className="flex justify-between items-center gap-6 sm:flex-row flex-col">
                        <h1 className="stroker xl:text-[80px] lg:text-6xl md:text-5xl text-[40px] max-sm:w-56 max-xs:w-full font-lexend leading-normal uppercase text-transparent">INTRO
                            <span className="flex xl:ml-32 xs:ml-[90px] ml-12">VIDEO</span>
                        </h1>
                        <div className="flex justify-center relative xl:w-[336px] md:w-60 sm:w-44 w-full m-0 ml-auto">
                            <img className="animate-borderTransform" src={videoShape} alt="" />
                            <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center xl:w-[104px] xl:h-[104px] md:w-20 md:h-20 w-[75px] h-[75px] rounded-full bg-whiteShade after:content-[''] after:absolute after:-top-3.5 after:-bottom-3.5 after:-left-3.5 after:-right-3.5 after:inset-3.5 after:border after:border-solid after:border-whiteShade after:rounded-[152px] after:opacity-15 after:animate-ripple">
                                <Play className='text-black' size={24} weight='fill' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSec
