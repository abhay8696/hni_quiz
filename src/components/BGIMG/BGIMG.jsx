import React from "react";

const BGIMG = ({ url }) => {
    return (
        <div
            className="flex-1 h-[100vh] top-0 bottom-0"
            style={{
                background: `url(${url})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // position: "absolute",
                top: 0,
                right: 0,
            }}
        ></div>
    );
};

export default BGIMG;
