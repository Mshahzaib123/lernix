import { useLocation } from 'react-router-dom'
import { categoryBlogData2 } from '../../Data'
import BlogSidebar from '../blogSidebar/blogSidebar'
import BlogCard2 from './blogCard2'
import Pagination from '../pagination/pagination'

const BlogSec3 = () => {
    const location = useLocation();

    return (
        <section class="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div class="container">
                <div class="flex lg:flex-row flex-col gap-6">
                    <div class="lg:w-2/3">
                        {
                            (location.pathname === '/blog-standard' || location.pathname === '/category') ?
                                <div className="lg:flex lg:flex-col grid md:grid-cols-4 gap-5">
                                    {categoryBlogData2.slice(0, 3).map((data, index) => (
                                        <BlogCard2 key={index} data={data} className="lg:col-span-full md:col-span-2 col-span-4 lg:last:col-start-0 md:last:col-start-2 last:justify-self-center" />
                                    ))}
                                </div>
                                :
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6">
                                    {categoryBlogData2.slice(0, 8).map((data, index) => (
                                        <BlogCard2 key={index} data={data} />
                                    ))}
                                </div>
                        }
                        <Pagination />
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )
}

export default BlogSec3
