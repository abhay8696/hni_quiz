import React, { useContext, useState } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import { questionsArray } from "../../QuestionsArray";

const QuizBody = () => {
    //functions
    const selectFiveRandom = () => {
        let newQueArr = [...questionsArray];
        let len = 0;
        let randomFive = [];

        while (len < 5) {
            const index = Math.floor(Math.random() * newQueArr.length);
            let que = newQueArr.splice(index, 1)[0];
            len++;
            randomFive.push(que);
        }
        // setTempArr([...randomFive]);

        return randomFive;
    };

    const displayQuestions = () => {
        let arr = selectFiveRandom();
        console.log(arr);
        if (!arr || !arr.length) arr = [];
        let queNO = 1;

        return arr.map((que) => {
            return (
                <QuizQuestion
                    data={que}
                    queID={`que-${queNO}`}
                    key={`que-${queNO}`}
                    queNo={queNO++}
                    maxQuestions={5}
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
