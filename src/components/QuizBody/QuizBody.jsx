import React, { useContext } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";

const QuizBody = () => {
    return (
        <div className="h-[100vh]" id="QuizBody">
            <QuizIntro />;
            <QuizQuestion />
        </div>
    );
};

export default QuizBody;
