import React from "react";
//components
import Button from "../Button/Button";

const HNIButton = () => {
    return (
        <a
            href="https://hnicapitals.com/"
            target="_blank"
            className="text-black"
        >
            <Button
                text="HNI Capitals Website"
                customClass="w-[auto] bg-black text-mainBg"
            />
        </a>
    );
};

export default HNIButton;
