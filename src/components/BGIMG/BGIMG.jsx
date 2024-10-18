import React from "react";

const BGIMG = ({ url, customClass }) => {
    return (
        <div
            className={`flex-1 top-0 bottom-0 ${customClass}`}
            style={{
                background: `url(${url})`,
                backgroundSize: "contain",
                backgroundPosition: "bottom right",
                backgroundRepeat: "no-repeat",
            }}
        ></div>
    );
};

export default BGIMG;
