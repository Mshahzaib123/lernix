import { useNavigate } from 'react-router-dom';
import { categoryBlogData } from '../../Data';

import SectionTitle from '../sectionTitle/sectionTitle';
import ThemeButton from '../themeButton/themeButton';
import BlogMCard from './blogMCard';
import BlogSCard from './blogSCard';

// import blogImg from '../../assets/blog6.webp';
import shape10 from '../../assets/shape10.svg';
import shape11 from '../../assets/shape11.svg';

const BlogSec2 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/blog-standard");
    }
    return (
        <section className="relative bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="text-center md:mb-12 mb-7">
                    <SectionTitle
                        subtitle="Our Blog"
                        title="Read Our Latest"
                        highlightedText="Blog"
                        headingLevel='h2'
                        className='text-center'
                    />
                </div>
                <div className='relative z-[2] grid lg:grid-cols-2 gap-6'>
                    {
                        categoryBlogData.map((data, index) => (
                            index == 0 ?
                                <div className="lg:row-span-2">
                                    <BlogMCard key={index} data={data} />
                                </div>
                                :
                                <div className='flex flex-col gap-y-8'>
                                    <BlogSCard key={index} data={data} />
                                </div>
                        ))
                    }
                    {/* <div className="lg:row-span-2">
                        <BlogMCard
                            path={`/blog-detail/${data.id}`}
                            blogImg={blogImg}
                            datePosted="June 4, 2024"
                            field="Technical"
                            blogHeading="Top 5 Programming Languages to Learn for a Thriving Tech Career"
                            blogDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                        />
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        {categoryBlogData.map((data, index) => (
                            <BlogSCard key={index} data={data} />
                        ))}
                    </div> */}
                </div>
                <div className="flex justify-center mt-8">
                    <ThemeButton variant="solid" theme="primary" onClick={handleClick} text="View All Blog" />
                </div>
            </div>
            <img className="absolute top-32 right-10 lg:block hidden" src={shape10} alt="" />
            <img className="absolute left-12 bottom-44 animate-rotateMe2 lg:block hidden" src={shape11} alt="" />
        </section>
    )
}

export default BlogSec2
