import { Link, useLocation } from 'react-router-dom'
import { SquaresFour, ListBullets, CaretDown } from '@phosphor-icons/react';

import TitleComponent from '../titleComponent/titleComponent';

const LayoutInfo = () => {
    const location = useLocation();
    return (
        <div class="flex justify-between sm:items-center sm:flex-row flex-col sm:gap-0 gap-6 md:mb-12 mb-7">
            <div class="flex items-center">
                <Link to="/courses-grid-view" class={`flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-11 h-11 rounded ${location.pathname === "/courses-list-view" ? "bg-grey100 duration-300 hover:bg-primary" : "bg-primary"} group`}>
                    <SquaresFour className={`${location.pathname === "/courses-list-view" ? "text-black duration-300 group-hover:text-whiteShade" : "text-white"}`} weight='bold' size={24} />
                </Link>
                <Link to="/courses-list-view" class={`ml-4 mr-6 mx-3 flex justify-center items-center lg:w-14 lg:h-14 md:w-12 md:h-12 w-11 h-11 rounded ${location.pathname === "/courses-list-view" ? "bg-primary" : "bg-grey100 duration-300 hover:bg-primary"} group`}>
                    <ListBullets className={`${location.pathname === "/courses-list-view" ? "text-white" : "text-black duration-300 group-hover:text-whiteShade"}`} weight='bold' size={24} />
                </Link>
                <TitleComponent size='small-medium' className='text-bodyColor md:text-lg'>Showing 12 courses of 52</TitleComponent>
            </div>
            <div className='relative bg-grey100 rounded max-w-[272px]'>
                <select class="relative appearance-none border-0 outline-0 bg-transparent text-bodyColor md:text-lg text-base font-semibold leading-normal md:py-4 md:pr-12 md:pl-5 py-3 pl-3 pr-10">
                    <option selected="">Sort By: Popularity</option>
                    <option value="1">Popularity One..</option>
                    <option value="2">Popularity Two..</option>
                    <option value="3">Popularity Three..</option>
                </select>
                <CaretDown className='absolute top-1/2 -translate-y-1/2 right-4' weight='bold' size={16} />
            </div>
        </div>
    )
}

export default LayoutInfo
