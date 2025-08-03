import { Link } from 'react-router-dom'
import { categoryData2 } from '../../Data'
import { CaretRight } from '@phosphor-icons/react'

import TitleComponent from '../titleComponent/titleComponent'

const CategoryBox = () => {
  return (
    <div className="bg-white shadow-boxShadow rounded-lg xl:p-8 p-5">
      <TitleComponent type='h4' className="text-black">Categories</TitleComponent>
      <ul className="flex flex-col xl:gap-5 gap-4 mt-6">
        {categoryData2.map((item, index) => (
          <li key={index}>
            <Link to="/category" className={`flex justify-between items-center rounded xl:pt-4 xl:px-5 xl:pb-5 py-3.5 px-4 ${index === 1 ? "bg-primary" : "bg-grey100 duration-300 hover:bg-primary"} group`}>
              <TitleComponent size='base-medium' className={`${index === 1 ? "text-whiteShade" : "text-bodyColor duration-300 group-hover:text-whiteShade"}`}>{item}</TitleComponent>
              <CaretRight className={`${index === 1 ? "text-whiteShade" : "text-bodyColor duration-300 group-hover:text-whiteShade"}`} size={20} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryBox
