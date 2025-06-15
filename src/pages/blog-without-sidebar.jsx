import HeroSec4 from '../components/heroSec/heroSec4'
import BlogCard2 from '../components/blogSec/blogCard2'
import Pagination from '../components/pagination/pagination'
import { categoryBlogData2 } from '../Data'

const BlogWithoutSidebar = () => {
    return (
        <>
            <HeroSec4 heading="Blog Grid Without Sidebar" subHeading="Blog" />
            <section className='lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12'>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {categoryBlogData2.map((data, index) => (
                            <BlogCard2 key={index} data={data} />
                        ))}
                    </div>
                    <Pagination />
                </div>
            </section>
        </>
    )
}

export default BlogWithoutSidebar
