import React, { useContext } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import { questionsArray } from "../../QuestionsArray";

const QuizBody = () => {
    //functions
    const displayQuestions = () => {
        let queNO = 1;

        return questionsArray.map((que) => {
            return (
                <QuizQuestion
                    data={que}
                    queID={`que-${queNO}`}
                    key={`que-${queNO}`}
                    queNo={queNO++}
                />
            );
        });
    };
    return (
        <div className="h-[100vh]" id="QuizBody">
            <QuizIntro />
            {displayQuestions()}
        </div>
    );
};

export default QuizBody;
