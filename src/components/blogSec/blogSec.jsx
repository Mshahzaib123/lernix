import { useLocation, useNavigate } from 'react-router-dom';
import { newsData, simpleBlogData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import NewsCard from './newsCard';
import BlogCard from './blogCard';

const BlogSec = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/blog-standard");
    }
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex md:items-end items-start justify-between md:gap-y-0 gap-y-6 md:flex-row flex-col md:mb-12 mb-7">
                    <SectionTitle
                        subtitle={"Our Blog"}
                        title={"Read Our Latest"}
                        highlightedText={location.pathname === '/homepage2' ? "Blog & News" : "Blog"}
                        headingLevel='h2'
                    />
                    <ThemeButton variant="solid" theme="primary" onClick={handleClick} text="View All Blog" />
                </div>

                {
                    location.pathname === '/homepage2'
                        ?
                        <div class="grid md:grid-cols-2 gap-6 content-center">
                            {newsData.map((data, index) => (
                                <NewsCard key={index} data={data} />
                            ))}
                        </div>
                        :
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 content-center">
                            {simpleBlogData.map((data, index) => (
                                <BlogCard key={index} data={data} />
                            ))}
                        </div>
                }
            </div>
        </section>
    )
}

export default BlogSec;
