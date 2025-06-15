import HeroSec from '../components/heroSec/heroSec'
import CategoriesSec from '../components/categoriesSec/categoriesSec'
import BlogSec from '../components/blogSec/blogSec'
import LiveClassesSec from '../components/liveClassesSec/liveClassesSec'
import TestimonialSec from '../components/testimonialSec/testimonialSec'
import NewsletterSec from '../components/newsletterSec/newsletterSec'
import TeamSec from '../components/teamSec/teamSec'
import ChooseUsSec from '../components/chooseUsSec/chooseUsSec'
import AboutSec from '../components/aboutSec/aboutSec'
import VideoSec from '../components/videoSec/videoSec'
import CoursesSec from '../components/coursesSec/coursesSec'

const HomePage = () => {
    return (
        <>
            <HeroSec />
            <CategoriesSec />
            <AboutSec />
            <VideoSec />
            <CoursesSec />
            <ChooseUsSec />
            <TeamSec />
            <NewsletterSec />
            <TestimonialSec />
            <LiveClassesSec />
            <BlogSec />
        </>
    )
}

export default HomePage
