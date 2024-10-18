import React from "react";

const Button = (props) => {
    const { text, clickFunction, customClass, formButton } = props;

    return (
        <button
            className={`Button bg-inherit ${customClass} w-[100px]  border border-primary cursor-pointer outline-none`}
            onClick={clickFunction}
            type={formButton && "submit"}
        >
            {text}
        </button>
    );
};

export default Button;
