import React, { useContext } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
import { scrollToElement } from "../../helperFunctions";

const QuizIntro = () => {
    //contexts
    const [fullName, setFullName] = useContext(UserDataContext);
    return (
        <div className="h-[100vh] flex items-center" id="QuizBody">
            <div className="h-[75vh] text-left flex flex-col justify-center gap-32">
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
                />
            </div>
        </div>
    );
};

export default QuizIntro;
