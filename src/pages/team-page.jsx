import TeamSec from '../components/teamSec/teamSec'
import LiveClassesSec from '../components/liveClassesSec/liveClassesSec'
import HeroSec4 from '../components/heroSec/heroSec4'

const TeamPage = () => {
    return (
        <>
            <HeroSec4 heading="Our Team" subHeading="Team" />
            <TeamSec />
            <LiveClassesSec />
        </>
    )
}

export default TeamPage
