import React, { useContext } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
import { scrollToElement } from "../../helperFunctions";
import BGIMG from "../BGIMG/BGIMG";

const QuizIntro = () => {
    //contexts
    const [fullName, setFullName] = useContext(UserDataContext);
    return (
        <div
            className="relative h-[100vh] flex items-center md:p-[2rem]"
            id="QuizBody"
        >
            <div
                className="absolute h-[100vh] w-[100vw] md:hidden right-0 left-0 md:left-[auto]"
                style={{
                    background: `url(https://media.istockphoto.com/id/1181024482/photo/medical-finance-insurance.jpg?s=612x612&w=0&k=20&c=vFUgCpg5RMQwgbZSds6A5oZKP1Vn-cdwtAOW6DwxY5A=)`,
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="px-[1rem] md:px-[0] absolute h-[75vh] text-left flex flex-col justify-center gap-32">
                <h1 className="capitalize text-h1">
                    Hello {fullName.firstName}!
                </h1>
                <div className="flex flex-col gap-4">
                    <h3 className="text-h3 font-light">
                        You will be given a few questions in upcoming slides.
                    </h3>
                    <h3 className="text-h3 font-light">
                        Try to solve as many as you can, Best Of Luck!
                    </h3>
                </div>
                <Button
                    text="let's go"
                    clickFunction={() => scrollToElement("que-1")}
                    customClass="bg-black md:bg-inherit text-mainBg md:text-black"
                />
            </div>
        </div>
    );
};

export default QuizIntro;
