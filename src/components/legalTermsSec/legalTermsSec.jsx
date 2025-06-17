import TitleComponent from '../titleComponent/titleComponent';

const LegalTermsSec = () => {
    return (
        <section className="lg:pt-32 md:pt-[90px] pt-[70px] lg:pb-28 md:pb-[75px] pb-12">
            <div className="container">
                <div>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">Our website</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Our website address is: <span
                        className="text-darkBrown cursor-pointer text-small duration-300 hover:text-primary">https://Learnix.com/</span></TitleComponent>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">Intellectual property</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</TitleComponent>
                    <TitleComponent size='small-medium' className="mt-4 text-bodyColor md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</TitleComponent>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">Learnix Overview</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, company name. We will collect personal identification information from Users only if they voluntarily consent such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related.</TitleComponent>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">General permission to use and access and use limitations</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">This site is provided by <span className="text-black font-bold">Learnix. Learnix</span> collects information in several ways from different parts of this site.</TitleComponent>
                    <ul className="mt-4">
                        <li className="mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">1. </span>Complimentary ground shipping within 1 to 7 business days</TitleComponent>
                        </li>
                        <li className="mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">2. </span>In-store collection available within 1 to 7 business days</TitleComponent>
                        </li>
                        <li className="mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">3. </span>Next-day and Express delivery options also available</TitleComponent>
                        </li>
                        <li className="mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">4. </span>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</TitleComponent>
                        </li>
                        <li className="mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">5. </span>See the delivery FAQs for details on shipping methods, costs and delivery times</TitleComponent>
                        </li>
                    </ul>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">Linking to this Site</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</TitleComponent>
                    <TitleComponent type='h4' className="mt-6 mb-2.5 text-black">Confidential information</TitleComponent>
                    <TitleComponent size='small-medium' className="text-bodyColor md:text-base">
                        <span className="desc_inr heading-sb">Learnix</span> accepts the following payment methods:
                    </TitleComponent>
                    <ul className="mt-4 ml-4 list-disc">
                        <li className="list-disc mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base">Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</TitleComponent>
                        </li>
                        <li className="list-disc mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base"><span className="text-black text-base font-bold">Learnix</span> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</TitleComponent>
                        </li>
                        <li className="list-disc mb-2.5 last:mb-0">
                            <TitleComponent size='small-medium' className="text-bodyColor md:text-base">PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website
                                <span className="text-darkBrown text-small cursor-pointer duration-300 hover:text-primary">paypal.com</span>
                            </TitleComponent>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LegalTermsSec
