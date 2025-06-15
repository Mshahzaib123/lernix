import { Link } from 'react-router-dom'
import { CaretDoubleRight } from '@phosphor-icons/react'

const Pagination = () => {
    return (
        <div className="flex justify-center items-center gap-3 mt-8">
            <Link to="#" className="flex justify-center items-center md:w-12 md:h-12 w-10 h-10 bg-darkPink100 rounded text-whiteShade text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100">1</Link>
            <Link to="#" className="flex justify-center items-center md:w-12 md:h-12 w-10 h-10 bg-grey100 rounded text-bodyColor text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100">2</Link>
            <Link to="#" className="flex justify-center items-center md:w-12 md:h-12 w-10 h-10 bg-grey100 rounded text-bodyColor text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100">3</Link>
            <Link to="#" className="flex justify-center items-center md:w-12 md:h-12 w-10 h-10 bg-grey100 rounded text-bodyColor text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100"><CaretDoubleRight weight='bold' /></Link>
        </div>
    )
}

export default Pagination
