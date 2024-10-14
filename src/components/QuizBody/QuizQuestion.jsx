import React from "react";
import Button from "../Button/Button";

const QuizQuestion = () => {
    return (
        <div className="h-[100vh] flex items-center" id="quiz-1">
            <div className="h-[75vh] text-left flex flex-col justify-center gap-32">
                <h1 className="capitalize text-h1">Question no 1.</h1>
                <h2 className="text-h2 font-thin"> will be displayed here</h2>
                <p>Work in progress...</p>
                <Button text="let's go" clickFunction={""} />
            </div>
        </div>
    );
};

export default QuizQuestion;
