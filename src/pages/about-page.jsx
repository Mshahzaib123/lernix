import HeroSec4 from '../components/heroSec/heroSec4'
import AboutSec2 from '../components/aboutSec/aboutSec2'
import ChooseUsSec from '../components/chooseUsSec/chooseUsSec'
import FunFactSec from '../components/funFactSec/funFactSec'
import TestimonialSec from '../components/testimonialSec/testimonialSec'
import TeamSec2 from '../components/teamSec/teamSec2'

const AboutPage = () => {
    return (
        <>
            <HeroSec4 heading="About Us" subHeading="About Us" />
            <AboutSec2 />
            <ChooseUsSec />
            <FunFactSec />
            <TestimonialSec />
            <TeamSec2 />
        </>
    )
}

export default AboutPage
