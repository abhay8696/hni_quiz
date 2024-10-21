import React, { useContext, useEffect, useState } from "react";
//contexts
import {
    RandomQuestionsContext,
    UserDataContext,
} from "../../Contexts/AllContexts";
//components
import Button from "../Button/Button";
//helper functions
import {
    scrollToElement,
    sendMessageToGuest,
    sendMessageToOwner,
} from "../../helperFunctions";
//assets
import emptyStar from "../../assets/emptyStar.svg";
import filledStar from "../../assets/filledStar.svg";
import HNIButton from "../Links/HNIButton";

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
        else if (score >= 3) msg = `Good Job ${fullName.firstName || "buddy"}!`;
        else if (score >= 1)
            msg = `Better Luck next time ${fullName.firstName || "Doc"} :(`;
        else
            msg = `I know you can do better, ${
                fullName.firstName || "Doc..."
            } :(`;

        setResult({ msg, score });
    };

    const displayStars = () => {
        let arr = [];

        for (let i = 0; i < result.score; i++)
            arr.push(<img src={filledStar} className="w-[30px] md:w-[50px]" />);

        for (let i = result.score; i < 5; i++)
            arr.push(<img src={emptyStar} className="w-[30px] md:w-[50px]" />);

        // console.log(arr);
        return arr;
    };

    const finishButton = (
        <Button text="Finish" clickFunction={() => scrollToElement(`outro`)} />
    );

    const answersButton = (
        <Button
            text="Answers"
            clickFunction={() => scrollToElement(`Answers`)}
        />
    );

    return (
        <div className="md:p-[1rem] h-[100vh] flex items-center" id={"result"}>
            <div className="px-[1rem] md:px-[0] min-h-[75vh] text-left flex flex-col justify-center gap-8">
                <h1 onClick={() => console.log(randomQuestions)}>
                    {result.msg}
                </h1>
                <div className="flex flex-wrap gap-4">
                    <h1
                        onClick={() => console.log(randomQuestions)}
                        className="font-thin text-h3 md:text-h1"
                    >
                        your score:{" "}
                    </h1>
                    <div className="flex gap-4">{displayStars()}</div>
                    <p className="font-thin">{result.score} / 5</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {finishButton}
                    {answersButton}
                    <HNIButton />
                </div>
            </div>
        </div>
    );
};

export default Result;
