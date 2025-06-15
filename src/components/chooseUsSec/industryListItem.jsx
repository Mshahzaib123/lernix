import { Check } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';

const IndustryListItem = ({ data }) => {
    return (
        <>
            <div className="flex justify-center items-center w-5 h-5  bg-black rounded-sm duration-300 group-hover:bg-primary">
                <Check className='text-whiteShade' weight='bold' size={12} />
            </div>
            <div>
                <TitleComponent type='h4' className='text-black text-lg'>{data.heading}</TitleComponent>
                <TitleComponent size='small-medium' className='text-bodyColor mt-2.5 xl:text-lg md:text-base text-sm'>{data.desc}</TitleComponent>
            </div>
        </>
    )
}

export default IndustryListItem
