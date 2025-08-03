import { useNavigate } from 'react-router-dom';
import { CategoryData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import CategoryCard from './categoryCard';

const CategoriesSec = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/courses-list-view")
    }
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex md:items-end items-start justify-between md:gap-y-0 gap-y-6 md:flex-row flex-col md:mb-12 mb-8">
                    <SectionTitle subtitle={"Course Category"} title={"Explore Top"} highlightedText={"Courses"} headingLevel='h2' />
                    <ThemeButton variant="solid" theme="primary" text="View All Categories" onClick={handleClick} />
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {CategoryData.map((data, index) => {
                        const bgColor = index % 2 === 0 ? 'lightPink100' : 'lightGreen';
                        return (
                            <CategoryCard key={index} data={data} bgColor={bgColor} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CategoriesSec;
