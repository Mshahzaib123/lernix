import { Link } from 'react-router-dom'
import { CaretDoubleRight } from '@phosphor-icons/react'

const Pagination = () => {
    const paginationData = ["1", "2", "3"]
    return (
        <div className="flex justify-center items-center gap-3 mt-8">
            {paginationData.map((item, index) => (
                <Link key={index} to="#" className={`flex justify-center items-center md:w-12 md:h-12 w-10 h-10 ${index == 0 ? "bg-darkPink100 text-whiteShade" : "bg-grey100 text-bodyColor"} bg-darkPink100 rounded text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100`}>{item}</Link>
            ))}
            <Link to="#" className="flex justify-center items-center md:w-12 md:h-12 w-10 h-10 bg-grey100 rounded text-bodyColor text-base font-semibold duration-300 hover:text-whiteShade hover:bg-darkPink100"><CaretDoubleRight weight='bold' /></Link>
        </div>
    )
}

export default Pagination
