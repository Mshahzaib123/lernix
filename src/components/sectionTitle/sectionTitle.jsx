import React from "react";

import TitleComponent from "../titleComponent/titleComponent";
import underlineSvg from "../../assets/title-shape.svg"; // update path accordingly

const SectionTitle = ({ subtitle, title, remainingTitle, highlightedText, headingLevel = "h1", headingColor, className = '' }) => {
    const HeadingTag = headingLevel; // h1, h2, h3 etc.

    return (
        <div className={`section-title ${className}`}>
            {/* Subtitle */}
            <TitleComponent type="p" size="large-bold" className="inline-block bg-gradient bg-clip-text text-transparent text-base md:text-lg">{subtitle}</TitleComponent>

            {/* Dynamic Heading Tag */}
            <TitleComponent type={HeadingTag} className={`mt-3 ${headingColor ? headingColor : "text-black"} ${HeadingTag === 'h1' ? 'xl:!leading-[5.7rem]' : 'lg:!leading-[3.2rem]'}`}>
                {title}{" "}
                {highlightedText && (
                    <span className="relative inline-block bg-gradient bg-clip-text text-transparent mr-2">
                        {highlightedText}
                        <img
                            className="absolute bottom-0 lg:-bottom-[4px] left-1/2 -translate-x-1/2 w-4/5"
                            src={underlineSvg}
                            alt="Underline"
                        />
                    </span>
                )}
                {remainingTitle}
            </TitleComponent>
        </div>
    );
};

export default SectionTitle;
