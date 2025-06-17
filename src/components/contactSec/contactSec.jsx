import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/sectionTitle';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeButton from '../themeButton/themeButton';
import FormInput from '../formInput/formInput';

import contact1Svg from '../../assets/contact1.svg';
import contact2Svg from '../../assets/contact2.svg';
import contact3Svg from '../../assets/contact3.svg';

const ContactSec = () => {
    return (
        <>
            <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
                <div className="container">
                    <div className="flex gap-12 lg:flex-row flex-col">
                        <div className="lg:w-1/3">
                            <SectionTitle
                                subtitle="Contact Us"
                                title="Get In"
                                highlightedText="Touch"
                                headingLevel='h2'
                            />
                            <ul className="flex flex-col gap-10 mt-14">
                                <li className="grid grid-cols-[auto_1fr] items-center gap-5">
                                    <div className="flex justify-center items-center w-14 h-14 bg-lightPurple100 rounded">
                                        <img src={contact1Svg} alt="" />
                                    </div>
                                    <div>
                                        <TitleComponent size='large-semibold' className="text-black mb-1">Email-Us :</TitleComponent>
                                        <Link to="mailto:zainmateen259@gmail.com" className="text-bodyColor text-base font-medium duration-300 hover:text-primary">zainmateen259@gmail.com</Link>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-5">
                                    <div className="flex justify-center items-center w-14 h-14 bg-lightGreen100 rounded">
                                        <img src={contact2Svg} alt="" />
                                    </div>
                                    <div>
                                        <TitleComponent size='large-semibold' className="text-black mb-1">Call Us :</TitleComponent>
                                        <Link to="/" className="text-bodyColor text-base font-medium duration-300 hover:text-primary">+123 456 8900</Link>
                                    </div>
                                </li>
                                <li className="grid grid-cols-[auto_1fr] items-center gap-5">
                                    <div className="flex justify-center items-center w-14 h-14 bg-lightPurple100 rounded">
                                        <img src={contact3Svg} alt="" />
                                    </div>
                                    <div>
                                        <TitleComponent size='large-semibold' className="text-black mb-1">Office :</TitleComponent>
                                        <TitleComponent size='base-medium' className="text-bodyColor">Mountain Green Road 2389, NY, USA</TitleComponent>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="flex flex-col gap-6 xl:p-7 p-5 bg-white rounded-lg shadow-boxShadow">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="w-full">
                                        <FormInput name={"Name"} type={"text"} placeholder={"Name*"} />
                                    </div>
                                    <div className="w-full">
                                        <FormInput name={"Email"} type={"email"} placeholder={"Email*"} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <FormInput name={"Email"} type={"url"} placeholder={"Wesbite Address*"} />
                                </div>
                                <textarea className="w-full h-[200px] bg-grey100 text-greyShade text-base font-medium leading-normal p-5 rounded border-none outline-none resize-y" placeholder="Your Message*"></textarea>
                                <div className="flex">
                                    <ThemeButton variant="solid" theme="primary2" text="Post Comment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <iframe className='w-full 2xl:h-[500px] md:h-[400px] sm:h-[300px] h-52 -mb-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24196.22093656893!2d-111.91936604612816!3d40.70640020197386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528ace2b0246f5%3A0x492b0c437e9cceb8!2sSouth%20Salt%20Lake%2C%20UT%2C%20USA!5e0!3m2!1sen!2sbd!4v1724093902757!5m2!1sen!2sbd" />
        </>
    )
}

export default ContactSec
