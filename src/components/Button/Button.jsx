import React from "react";

const Button = (props) => {
    const { text, clickFunction, customClass, formButton } = props;

    return (
        <button
            className={`Button ${customClass} w-[100px] bg-inherit border border-primary cursor-pointer outline-none`}
            onClick={clickFunction}
            type={formButton && "submit"}
        >
            {text}
        </button>
    );
};

export default Button;
