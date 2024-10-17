import React, { useContext, useEffect, useState } from "react";
//contexts
import {
    RandomQuestionsContext,
    UserDataContext,
} from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
//helper functions
import { scrollToElement } from "../../helperFunctions";
//assets
import emptyStar from "../../assets/emptyStar.svg";
import filledStar from "../../assets/filledStar.svg";

const Result = () => {
    const [result, setResult] = useState({
        score: 0,
        msg: "Better Luck next time buddy :(",
    });

    //contexts
    const [fullName, setFullName] = useContext(UserDataContext);
    const [randomQuestions, setRandomQuestions] = useContext(
        RandomQuestionsContext
    );

    //side effects
    useEffect(() => {
        calculateResult();
    }, [randomQuestions]);
    //functions
    const preButton = (
        <Button
            text="Previous"
            clickFunction={() => scrollToElement(`que-5`)}
        />
    );

    const tryAgainButton = (
        <Button
            text="try again"
            clickFunction={() => scrollToElement(`userForm`)}
        />
    );

    const calculateResult = () => {
        let score = 0,
            msg = "";
        randomQuestions.forEach((que) => {
            console.log(
                String(que.selectedAnswer) === String(que.answer),
                String(que.selectedAnswer),
                String(que.answer)
            );
            if (String(que.selectedAnswer) === String(que.answer)) score++;
        });

        if (score === 5)
            msg = `Excellent Job ${
                fullName.firstName || "buddy"
            }! You got all answers correct.`;
        else if (score >= 3)
            msg = `Good Job ${
                fullName.firstName || "buddy"
            }, you could do better`;
        else if (score >= 1)
            msg = `Better Luck next time ${fullName.firstName || "Doc"} :(`;
        else
            msg = `You need some financial classes ${
                fullName.firstName || "Doc..."
            } :(`;

        setResult({ msg, score });
    };

    const displayStars = () => {
        let arr = [];

        for (let i = 0; i < result.score; i++)
            arr.push(<img src={filledStar} className="w-[50px]" />);

        for (let i = result.score; i < 5; i++)
            arr.push(<img src={emptyStar} className="w-[50px]" />);

        // console.log(arr);
        return arr;
    };

    return (
        <div className="h-[100vh] flex items-center" id={"result"}>
            <div className="h-[75vh] text-left flex flex-col justify-center gap-16">
                <h1 onClick={() => console.log(randomQuestions)}>
                    {result.msg}
                </h1>
                <div className="flex gap-4">
                    <h1
                        onClick={() => console.log(randomQuestions)}
                        className="font-thin"
                    >
                        your score:{" "}
                    </h1>
                    <div className="flex gap-4">{displayStars()}</div>
                    <p className="font-thin">{result.score} / 5</p>
                </div>
                <div className="flex gap-4"></div>
            </div>
        </div>
    );
};

export default Result;
