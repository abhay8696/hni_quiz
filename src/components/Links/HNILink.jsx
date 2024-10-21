import React from "react";
// assets
import webIcon from "../../assets/web.svg";
//components
import Button from "../Button/Button";

const HNILink = () => {
    return (
        <a
            href="https://hnicapitals.com/"
            target="_blank"
            className="flex gap-1 text-mainBg uppercase bg-black fixed top-0 right-0 text-xs p-1"
        >
            {"Visit HNI Capitals"}
            <img src={webIcon} alt="" className="w-[15px]" />
        </a>
    );
};

export default HNILink;
