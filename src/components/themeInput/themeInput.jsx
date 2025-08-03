import React from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import ThemeButton from "../themeButton/themeButton";

const ThemeInput = ({
    type = "email",
    name = "email",
    id = "email",
    placeholder = "Write your email",
    required = true,
    buttonText = "",
    icon = EnvelopeSimple,
    className
}) => {
    const inputPadding = buttonText ? "md:px-8 md:pr-52 md:py-7 p-5" : "sm:py-5 px-4 py-3"
    return (
        <div className={`relative ${className}`}>
            <input
                className={`lg:h-full md:h-16 h-14 w-full border-none outline-none bg-whiteShade rounded ${inputPadding} text-base leading-normal text-bodyColor font-medium`}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                required={required}
            />
            {
                buttonText && (
                    <div className="sm:absolute relative sm:top-1/2 sm:right-3 sm:-translate-y-1/2 sm:mt-0 top-0 right-0 translate-y-0 mt-4">
                        <ThemeButton
                            variant="solid"
                            theme="primary"
                            text={buttonText}
                            arrowType={icon}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default ThemeInput;
