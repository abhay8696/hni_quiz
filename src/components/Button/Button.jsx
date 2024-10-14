import React from "react";

const Button = (props) => {
    const { text, clickFunction, customClass } = props;

    return (
        <button
            className={`Button ${customClass} w-[100px] bg-inherit border border-primary cursor-pointer outline-none`}
            onClick={clickFunction}
        >
            {text}
        </button>
    );
};

export default Button;
