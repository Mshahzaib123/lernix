import { MagnifyingGlass } from '@phosphor-icons/react'

const SearchBox = () => {
    return (
        <div className="bg-white rounded-lg shadow-boxShadow xl:p-8 p-5">
            <div className="relative">
                <div>
                    <input className="w-full xl:h-14 h-12 border-none ourline-none rounded bg-grey100 pt-4 pr-[72px] pb-5 pl-5 text-bodyColor placeholder-bodyColor text-base font-medium" type="search" name="search" id="search" placeholder="Search Keyword..." />
                </div>
                <div className="flex justify-center items-center bg-primary xl:w-14 xl:h-14 w-12 h-12 rounded-tr rounded-br absolute top-0 right-0">
                    <MagnifyingGlass className="text-whiteShade" size={24} />
                </div>
            </div>
        </div>
    )
}

export default SearchBox
