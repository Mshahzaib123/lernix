import { progressBarData } from '../../Data';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';

import choose1 from '../../assets/choose1.webp';
import chooseImgShape from '../../assets/choose-image-shape.svg';
import shape4 from '../../assets/shape4.svg';
import shape3 from '../../assets/shape3.svg';

const ChooseUsSec = () => {
    return (
        <section className="relative bg-lightPink200 lg:pt-32 md:pt-[90px] pt-[70px] ">
            <div className="container">
                <div className="flex gap-6 lg:flex-row flex-col justify-center">
                    <div className="lg:w-1/2">
                        <SectionTitle
                            subtitle="Why Choose Us"
                            title="One Platform & Many"
                            highlightedText="Courses"
                            remainingTitle="For You"
                            headingLevel='h2'
                        />
                        <TitleComponent size='large-medium' className='text-bodyColor text-base xl:mt-10 mb-4 mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</TitleComponent>
                        {progressBarData.map((item, index) => (
                            <div className="xl:mb-10 mb-6 last:mb-0" key={index}>
                                <div className="flex justify-between mb-3">
                                    <TitleComponent type='h6' className='text-bodyColor !font-bold'>{item.skill}</TitleComponent>
                                    <TitleComponent size='large-bold' className='text-bodyColor'>{item.percent}</TitleComponent>
                                </div>
                                <div className="relative w-full h-2.5 bg-grey200 rounded-full">
                                    <div className={`absolute h-1.5 bg-gradient rounded-full top-1/2 -translate-y-1/2 left-0.5`} style={{ width: `${item.percent}` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative flex justify-center lg:w-1/2 xl:ml-12">
                        <img className="relative z-[3]" src={choose1} alt="Choose Us" />
                        <img className="absolute top-1/2 lg:left-0 lg:right-0 z-[2] -translate-y-1/2" src={chooseImgShape} alt="" />
                        <img className="absolute 2xl:top-2.5 2xl:right-[0px] xl:right-2.5 top-0 right-0 z-[1]" src={shape4} alt="" />
                        <div className="absolute sm:top-32 left-6 top-7 w-6 h-6 bg-secondary rounded-full" />
                        <div className="absolute sm:left-[60px] left-0 bottom-11 w-10 h-10 bg-gradient rounded-full" />
                        <div className="absolute sm:right-[100px] right-0 bottom-2 w-[60px] h-[60px] bg-primary rounded-full" />
                    </div>
                </div>
            </div>
            <img className="absolute 2xl:top-[86px] 2xl:left-9 lg:top-8 lg:left-8 lg:block hidden" src={shape3} alt="" />
        </section>
    )
}

export default ChooseUsSec
