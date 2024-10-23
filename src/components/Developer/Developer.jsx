import React from "react";

const Developer = () => {
    return (
        <div
            className="p-[4rem] h-[100vh] flex justify-center items-end bg-blue-400"
            id={"developers"}
        >
            <p className="flex flex-col">
                <span>developed by</span>
                <a
                    href="https://portfolio-nine-xi-62.vercel.app/"
                    target="_blank"
                    className="font-bold text-black underline"
                >
                    abhay
                </a>
                <span>@</span>
                <a
                    href="#"
                    target=""
                    className="font-bold text-black underline"
                >
                    pvz consultancy
                </a>
            </p>
        </div>
    );
};

export default Developer;
