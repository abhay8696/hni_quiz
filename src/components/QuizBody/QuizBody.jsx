import React, { useContext, useState } from "react";
//components
import Button from "../Button/Button";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import { questionsArray } from "../../QuestionsArray";
import Result from "../Result/Result";
import { RandomQuestionsContext } from "../../Contexts/AllContexts";

const QuizBody = () => {
    //contexts
    const [randomQuestions, setRandomQuestions] = useContext(
        RandomQuestionsContext
    );

    //functions

    const displayQuestions = () => {
        let queNO = 1;

        return randomQuestions.map((que) => {
            return (
                <QuizQuestion
                    data={que}
                    queID={`que-${queNO}`}
                    key={`que-${queNO}`}
                    queNo={queNO++}
                    maxQuestions={5}
                    uid={que.uid}
                />
            );
        });
    };
    return (
        <div className="h-[100vh]" id="QuizBody">
            <QuizIntro />
            {displayQuestions()}
            <Result />
        </div>
    );
};

export default QuizBody;
