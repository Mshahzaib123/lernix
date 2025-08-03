import React, { useState, useRef, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { menuData, socialData } from "../../Data";
import { CaretDown, List, X, Plus } from "@phosphor-icons/react";

import brandLogoDark from '../../assets/brand-logo-dark-2.svg';
import brandLogoLight from '../../assets/brand-logo-light-2.svg'
import ThemeButton from "../themeButton/themeButton";
import TitleComponent from "../titleComponent/titleComponent";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/courses-detail")
    }

    const homepage3MenuColor = location.pathname === '/homepage3' ? 'text-white' : 'text-black';

    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const [contentHeights, setContentHeights] = useState([]);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const heights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
        setContentHeights(heights);
    }, []);

    const headerRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                if (location.pathname === '/homepage3') {
                    headerRef.current?.classList.add("bg-darkBlue2");
                    headerRef.current?.classList.remove("bg-white");
                }
                else {
                    headerRef.current?.classList.add("bg-white");
                    headerRef.current?.classList.remove("bg-darkBlue2");
                }
                headerRef.current?.classList.add("sticky", "shadow-boxShadow", "z-50");
                headerRef.current?.classList.remove("fixed");
            } else {
                headerRef.current?.classList.remove("sticky", "bg-darkBlue2", "bg-white", "shadow-boxShadow", "z-50");
                headerRef.current?.classList.add("fixed");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <>
            <div className={`fixed top-0 bottom-0 z-[999999] w-[400px] max-w-full h-screen bg-whiteShade origin-left duration-300 px-4 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                <div className="flex justify-between items-center py-5">
                    <Link to='/'>
                        <img className="2xl:w-48 max-w-32 object-contain" src={brandLogoDark} alt='Brand LOGO' />
                    </Link>
                    <X className="text-black cursor-pointer duration-300 hover:text-primary" size={24} weight="bold" onClick={toggleMenu} />
                </div>
                <ul className="flex flex-col gap-y-4">
                    {menuData.map((item, index) => (
                        <li className="relative group" key={index}>
                            {item.dropdown ? (
                                <>
                                    <button className="flex justify-between items-center gap-x-2 w-full cursor-pointer duration-500 group" onClick={() => toggleCollapse(index)}>
                                        <TitleComponent size="base-semibold" className={`${item.dropdown.find(drop => drop.path === location.pathname) || openIndex === index ? "text-primary" : "text-black group-hover:text-primary"} duration-500`}>{item.title}</TitleComponent>
                                        <Plus className={`${item.dropdown.find(drop => drop.path === location.pathname) || openIndex === index ? "text-primary" : "text-black group-hover:text-primary"} ${openIndex === index ? "rotate-[225deg]" : ""} duration-500`} size={16} weight="bold" />
                                    </button>
                                    <ul
                                        ref={(el) => (contentRefs.current[index] = el)}
                                        className="overflow-hidden duration-500 ease-in-out"
                                        style={{
                                            height: openIndex === index ? contentHeights[index] : "0px",
                                        }}>
                                        <div className="py-4 px-3">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li className="mb-2 last:mb-0" key={subIndex}>
                                                    <Link className={`w-full h-full text-sm font-semibold ${location.pathname === subItem.path ? "text-primary" : "text-black duration-300 hover:text-primary"}`} to={subItem.path} onClick={toggleMenu}>{subItem.title}</Link>
                                                </li>
                                            ))}
                                        </div>
                                    </ul>
                                </>
                            ) : (
                                <Link className={`${location.pathname === item.path ? "text-primary" : "text-black hover:text-primary"} xl:text-lg text-base font-semibold duration-300`} to={item.path} onClick={toggleMenu}>
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <ThemeButton variant="solid" theme="primary" text="Start Free Trial" className={"my-6 w-full"} onClick={handleClick} />
                <div className="flex items-center gap-6 flex-wrap">
                    {socialData.map((item, index) => (
                        <Link to="#" className="flex justify-center items-center w-12 h-12 bg-black rounded-full duration-300 hover:bg-primary" key={index}>
                            <item.icon className="text-white" size={24} weight="bold" />
                        </Link>
                    ))}
                </div>
            </div>

            <header ref={headerRef} className={`${location.pathname !== "/homepage2" ? "absolute w-full" : "relative"} top-0 left-0 z-10 duration-300`}>
                <div className="container">
                    <div className="flex justify-between items-center py-5">
                        <Link to='/'>
                            <img className="2xl:w-48 w-32 object-contain" src={location.pathname === '/homepage3' ? brandLogoLight : brandLogoDark} alt='Brand LOGO' />
                        </Link>
                        <List className={`lg:hidden cursor-pointer text-2xl ${homepage3MenuColor} duration-300 hover:text-primary`} weight="bold" onClick={toggleMenu} />
                        <ul className="hidden lg:flex items-center xl:gap-x-10 gap-x-7">
                            {menuData.map((item, index) => (
                                <li className="relative py-4 group" key={index}>
                                    {item.dropdown ? (
                                        <>
                                            <div className="flex items-center gap-x-2 cursor-pointer group">
                                                <p className={`xl:text-lg text-base font-semibold ${item.dropdown.find(drop => drop.path === location.pathname) ? "text-primary" : `${homepage3MenuColor} duration-300 group-hover:text-primary`}`}>{item.title}</p>
                                                <CaretDown className={`${item.dropdown.find(drop => drop.path === location.pathname) ? "text-primary" : `${homepage3MenuColor} duration-300 group-hover:text-primary`}`} size={16} weight="bold" />
                                            </div>
                                            <ul className="absolute z-10 top-24 left-0 w-60 bg-white shadow-dropdownShadow rounded-4 opacity-0 invisible duration-300 group-hover:top-14 group-hover:opacity-100 group-hover:visible">
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <li className="border-b-2 border-dashed border-greyShade last:border-b-0" key={subIndex}>
                                                        <Link className={`w-full h-full p-3.5 xl:text-base text-sm font-semibold ${location.pathname === subItem.path ? "text-primary" : "text-black duration-300 hover:text-primary"}`} to={subItem.path}>{subItem.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link className={`${homepage3MenuColor} xl:text-lg text-base font-semibold ${location.pathname === item.path ? "text-primary" : " duration-300 hover:text-primary"}`} to={item.path}>
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Link to='/contact-us' className="hidden lg:block">
                            <ThemeButton variant="solid" theme={`${location.pathname === "/homepage3" ? "primary2" : "primary"}`} text="Start Free Trial" onClick={handleClick} />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;