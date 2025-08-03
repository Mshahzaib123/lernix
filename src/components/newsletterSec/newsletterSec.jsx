import { EnvelopeSimple } from '@phosphor-icons/react';
import TitleComponent from '../titleComponent/titleComponent';
import ThemeInput from '../themeInput/themeInput';

import newsletterIcon from '../../assets/newsletter-icon.svg';

const NewsletterSec = () => {
    return (
        <section>
            <div className="container">
                <div className="relative bg-gradient md:py-20 md:px-10 py-[60px] px-6 rounded-xl
                after:content-[''] after:absolute after:bg-newsletterShape1 after:top-6 after:left-[18px] after:z-[2] after:w-9 after:h-8 after:bg-no-repeat after:bg-contain
            before:content-[''] before:absolute before:bg-newsletterShape2 before:right-10 before:bottom-5 before:z-[2] before:w-9 before:h-8 before:bg-no-repeat before:bg-contain">
                    <div className="flex lg:items-center gap-6 lg:flex-row flex-col items-[initial]">
                        <div className="lg:w-1/2 grid justify-center items-center lg:grid-cols-[auto_1fr] xl:gap-x-10 gap-x-7">
                            <div className="flex justify-center md:mb-0 mb-4">
                                <img className="xl:w-20 xl:h-[70px] md:w-[70px] w-16 object-contain" src={newsletterIcon} alt="NewsLetter Icon" />
                            </div>
                            <TitleComponent type='h3' className='text-whiteShade md:text-left text-center'>Enter Your email To Subscribe Our Newsletter</TitleComponent>
                        </div>
                        <ThemeInput
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Write your email"
                            required={true}
                            buttonText="Subscribe"
                            icon={EnvelopeSimple} className='lg:w-1/2'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSec
