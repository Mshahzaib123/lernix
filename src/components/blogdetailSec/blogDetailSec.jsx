import { Link, useParams } from 'react-router-dom'
import { commentsData, socialData2, simpleBlogData, newsData, categoryBlogData, categoryBlogData2 } from '../../Data';
import { ArrowBendDoubleUpLeft } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent'
import BlogSidebar from '../blogSidebar/blogSidebar'
import ThemeButton from '../themeButton/themeButton';

// import blogImg1 from '../../assets/blog1.webp';
// import blogImg2 from '../../assets/blog2.webp';
// import blogImg3 from '../../assets/blog3.webp';
// import blogImg4 from '../../assets/blog4.webp';
// import blogImg5 from '../../assets/blog5.webp';
// import blogImg6 from '../../assets/blog6.webp';
// import blogImg7 from '../../assets/blog7.webp';
// import blogImg8 from '../../assets/blog8.webp';
import blogImg9 from '../../assets/blog9.webp';
// import blogImg10 from '../../assets/blog10.webp';
// import blogImg11 from '../../assets/blog11.webp';
// import blogImg12 from '../../assets/blog12.webp';
// import blogImg13 from '../../assets/blog13.webp';
// import blogImg14 from '../../assets/blog14.webp';
// import blogImg15 from '../../assets/blog15.webp';
// import blogImg16 from '../../assets/blog16.webp';
// import blogImg26 from '../../assets/blog26.webp';
import userSvg from '../../assets/edugen.svg';
import calendarSvg from '../../assets/calendar2.svg';
import circleSvg from '../../assets/circle.svg';
import commentsSvg from '../../assets/comments.svg';
import quoteSvg from '../../assets/quote.svg';
import quoteShapeSvg from '../../assets/quote-shape.svg';
import blogImg27 from '../../assets/blog27.webp';
import blogImg28 from '../../assets/blog28.webp';
import blogImg29 from '../../assets/blog29.webp';
import blogImg30 from '../../assets/blog30.webp';
import FormInput from '../formInput/formInput';

const BlogDetailSec = () => {
    const { id } = useParams();
    const blogDetail = simpleBlogData.find((item) => item.id == id) || newsData.find((item) => item.id == id) || categoryBlogData.find((item) => item.id == id) || categoryBlogData2.find((item) => item.id == id);

    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div className="flex lg:flex-row flex-col gap-x-6 gap-y-12">
                    <div className="lg:w-2/3">
                        <div>
                            <div className="w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl">
                                <img className="w-full max-h-[450px] object-cover scale-105" src={blogDetail?.blogImg ? blogDetail.blogImg : blogImg9} alt="" />
                            </div>
                            <div className="bg-grey100 xl:p-10 p-5">
                                <ul className="flex justify-between items-center flex-wrap">
                                    <li className="flex items-center gap-2">
                                        <img className="w-5" src={userSvg} alt="" />
                                        <TitleComponent size='base-medium' className="text-bodyColor">{blogDetail?.user ? blogDetail.user : "Learnix"}</TitleComponent>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="icon" src={calendarSvg} alt="" />
                                        <TitleComponent className="text-bodyColor">{blogDetail?.datePosted ? blogDetail.datePosted : "27 Feb, 24"}</TitleComponent>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="icon" src={circleSvg} alt="" />
                                        <TitleComponent size='base-medium' className="text-bodyColor">3 Min Read</TitleComponent>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img className="icon" src={commentsSvg} alt="" />
                                        <TitleComponent size='base-medium' className="text-bodyColor">{blogDetail?.comment ? blogDetail.comment + " Comments" : "02 Comments"}</TitleComponent>
                                    </li>
                                </ul>
                                <TitleComponent type='h3' className="mt-6 mb-5 text-black !leading-snug">{blogDetail?.heading ? blogDetail.heading : "Learn at your own pace, with lifetime Access on Mobile & Desktop"}</TitleComponent>
                                <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</TitleComponent>
                                <div className="relative bg-primary rounded md:p-8 p-5 mt-8 mb-6">
                                    <img src={quoteSvg} alt="" />
                                    <TitleComponent size='large-medium' className="mt-5 mb-6 text-whiteShade">“ Education is one of the most powerful aspects of life. Education and learning allow us to make sense of the world around us, the world inside of us, and where we fit within the world.”</TitleComponent>
                                    <TitleComponent type='h4' className="relative pl-16 text-whiteShade after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-12 after:h-1 after:bg-whiteShade !font-medium">Rosalina D. Jackson</TitleComponent>
                                    <div className="shape_otr">
                                        <img className="absolute right-9 bottom-6 right animate-rotateMe lg:block hidden" src={quoteShapeSvg} alt="" />
                                    </div>
                                </div>
                                <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</TitleComponent>
                                <div className="grid md:grid-cols-2 gap-5 mt-4 mb-8">
                                    <img className="w-full rounded-lg" src={blogImg27} alt="" />
                                    <img className="w-full rounded-lg" src={blogImg28} alt="" />
                                </div>
                                <TitleComponent type='h4' className="text-black mb-5">Education Is About Academic Excellence And Cultural Diversity Learning Community</TitleComponent>
                                <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</TitleComponent>
                                <ul className="flex flex-col gap-5 mt-8 mb-9">
                                    <li className="relative pl-5 text-bodyColor md:text-base text-sm font-medium after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li className="relative pl-5 text-bodyColor md:text-base text-sm font-medium after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full">Vestibulum et orci bibendum, fringilla risus in, euismodorci.</li>
                                    <li className="relative pl-5 text-bodyColor md:text-base text-sm font-medium after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full">Donec mattis lorem sed dapibus vestibulum.</li>
                                    <li className="relative pl-5 text-bodyColor md:text-base text-sm font-medium after:content-[''] after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full">Donec mattis lorem sed dapibus vestibulum.</li>
                                </ul>
                                <div className="flex justify-between items-start flex-wrap gap-6">
                                    <div className="flex items-center gap-4">
                                        <TitleComponent type='h6' className="text-black !font-bold">Tags:</TitleComponent>
                                        <div className="flex items-center flex-wrap gap-3">
                                            <Link to="#" className="py-1 px-3 bg-white rounded-sm text-bodyColor lg:text-base text-sm font-medium duration-300 hover:bg-primary hover:text-whiteShade">Business</Link>
                                            <Link to="#" className="py-1 px-3 bg-white rounded-sm text-bodyColor lg:text-base text-sm font-medium duration-300 hover:bg-primary hover:text-whiteShade">Education</Link>
                                            <Link to="#" className="py-1 px-3 bg-white rounded-sm text-bodyColor lg:text-base text-sm font-medium duration-300 hover:bg-primary hover:text-whiteShade">Design</Link>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <TitleComponent type='h6' className="text-black !font-bold">Share On:</TitleComponent>
                                        <ul className="flex items-center gap-2.5">
                                            {socialData2.map((item, index) => (
                                                <Link key={index} to={item.path} className="group">
                                                    <img className="w-8 h-8 rounded object-cover duration-300 group-hover:-translate-y-2.5" src={item.icon} alt="" />
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5 mt-9">
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-4 p-5 rounded-lg bg-whiteShade">
                                        <div className="flex">
                                            <img className="w-20 h-20 rounded object-cover" src={blogImg29} alt="" />
                                        </div>
                                        <div>
                                            <TitleComponent size='small-medium' className="text-primary xl:text-base">Prev Post</TitleComponent>
                                            <TitleComponent size='small-semibold' className="text-black mt-1.5 xl:text-lg">How Technology Can Help You Stay Healthy</TitleComponent>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-5 rounded-lg bg-whiteShade">
                                        <div className="text-right">
                                            <TitleComponent size='small-medium' className="text-primary xl:text-base">Next Post</TitleComponent>
                                            <TitleComponent size='small-semibold' className="text-black mt-1.5 xl:text-lg">How Technology Can Help You Stay Healthy</TitleComponent>
                                        </div>
                                        <div className="md:order-1 flex justify-end">
                                            <img className="w-20 h-20 rounded object-cover" src={blogImg30} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-14">
                            <h3 className="text-black 2xl:text-4xl xl:text-3xl text-2xl leading-normal font-bold">3 Comments</h3>
                            {commentsData.map((item, index) => (
                                <div key={index} className={`md:mt-8 mt-5 ${item.tag === "reply" ? "md:mt-8 md:ml-24" : ""} md:pt-8 pt-5 border-t border-solid border-greyLight first-of-type:border-t-0`}>
                                    <div className="relative grid md:grid-cols-[auto_1fr] gap-6">
                                        <div className="flex">
                                            <img className="w-[72px] h-[72px] rounded-full object-cover" src={item.img} alt="" />
                                        </div>
                                        <div>
                                            <TitleComponent type='h6' className="text-black !font-semibold">{item.name}</TitleComponent>
                                            <TitleComponent size='small-medium' className="text-bodyColor mt-2.5 mb-4 md:text-lg">{item.datePosted}</TitleComponent>
                                            <TitleComponent size='small-medium' className="text-bodyColor max-w-[578px] md:text-base">{item.desc}</TitleComponent>
                                        </div>
                                        <div className="absolute top-0 right-0">
                                            <Link to="#" className="flex items-center gap-2 py-2 px-3.5 rounded bg-primary/10 duration-300 group hover:bg-primary">
                                                <ArrowBendDoubleUpLeft className='text-primary duration-300 group-hover:text-whiteShade' weight='bold' size={16} />
                                                <TitleComponent size='base-medium' className="text-primary duration-300 group-hover:text-whiteShade">Reply</TitleComponent>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black 2xl:text-4xl xl:text-3xl text-2xl leading-normal font-bold">Leave A Reply</h3>
                            <TitleComponent size='base-medium' className="mt-5 mb-8 text-bodyColor">Your email address will not be published. Requires fields are marked*</TitleComponent>
                            <form className="flex flex-col gap-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="w-full">
                                        <FormInput name={"Name"} type={"text"} placeholder={"Name*"} />
                                    </div>
                                    <div className="w-full">
                                        <FormInput name={"email"} type={"email"} placeholder={"Email*"} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <FormInput name={"url"} type={"url"} placeholder={"Website Address*"} />
                                </div>
                                <div>
                                    <textarea className="w-full h-[200px] bg-grey100 lg:p-5 p-3 text-bodyColor resize-none lg:text-base text-sm focus:outline-none" placeholder="Your Message*"></textarea>
                                </div>
                                <div className='flex'>
                                    <ThemeButton variant="solid" theme="primary2" text="Post Comment" displayArrow={false} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )
}

export default BlogDetailSec
