import React from "react";

import { ArrowRight } from "@phosphor-icons/react";

const themeStyles = {
    primary: {
        solid: "bg-black text-white",
        afterStyle: "bg-primary",
        splitIcon: "bg-blue-600 text-white group-hover:bg-blue-700",
        splitText: "text-white group-hover:text-blue-700",
        border: "border-blue-600"
    },
    primary2: {
        solid: "bg-primary text-white",
        afterStyle: "bg-black",
        splitIcon: "bg-blue-600 text-white group-hover:bg-blue-700",
        splitText: "text-white group-hover:text-blue-700",
        border: "border-blue-600"
    },
    primary3: {
        solid: "bg-primary text-white hover:text-black",
        afterStyle: "bg-white",
        splitIcon: "bg-blue-600 text-white group-hover:bg-blue-700",
        splitText: "text-white group-hover:text-blue-700",
        border: "border-blue-600"
    },
    dark: {
        solid: "bg-black text-white hover:bg-gray-900",
        splitIcon: "bg-black text-white group-hover:bg-gray-900",
        splitText: "text-black group-hover:text-gray-800",
        border: "border-black"
    },
    secondary: {
        solid: "bg-gray-200 text-black",
        afterStyle: "bg-[#070707]",
        splitIcon: "bg-[#070707] text-white group-hover:left-[15px]",
        splitText: "text-black group-hover:text-[#fbfbfb]",
        border: "border-black"
    },
    secondary2: {
        solid: "bg-gray-200 text-black",
        afterStyle: "bg-white",
        splitIcon: "bg-white text-black group-hover:left-[15px]",
        splitText: "text-white group-hover:text-black",
        border: "border-white"
    },
};

const ThemeButton = ({ variant = "solid", theme = "dark", text = "Click Me", onClick, displayArrow = true, arrowType, className }) => {
    const styles = themeStyles[theme] || themeStyles.dark;
    return (
        <>
            {variant === "solid" && (
                <button
                    onClick={onClick}
                    className={`relative group overflow-hidden flex justify-center items-center font-semibold 2xl:px-8 2xl:py-4 px-5 py-2.5 2xl:text-lg rounded duration-300 ${styles.solid} ${className}`}
                >
                    <span className={`absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 duration-500 origin-left rounded ${styles.afterStyle}`}></span>
                    {
                        displayArrow ?
                            <span className="z-10 flex items-center gap-2">
                                {text}
                                {
                                    arrowType ? React.createElement(arrowType, { size: 24, weight: "bold" }) : <ArrowRight size={24} weight="bold" />
                                }
                            </span>
                            :
                            <span className="z-10 flex items-center gap-2">{text}</span>
                    }
                </button>
            )}

            {variant === "split" && (
                <button
                    onClick={onClick}
                    className={`relative group overflow-hidden flex justify-center items-center pl-[80px] pr-[10px] 2xl:pl-[100px] 2xl:pr-[30px] font-semibold 2xl:px-8 2xl:py-4 px-5 py-2.5 2xl:text-lg rounded duration-300 group border border-bodyColor ${styles.border}`}
                >
                    <span className={`absolute z-[1] top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 duration-500 origin-left rounded ${styles.afterStyle}`}></span>
                    <span className={`absolute h-[110%] top-1/2 left-0 -translate-y-1/2 z-[10] p-5 flex items-center justify-center duration-300 ${styles.splitIcon}`}>
                        <ArrowRight className="" size={24} weight="bold" />
                    </span>
                    <span className={`relative z-[10] text-lg font-semibold 2xl:text-lg xs:text-base duration-300 ${styles.splitText}`}>
                        {text}
                    </span>
                </button>
            )}
        </>
    );
};

export default ThemeButton;
