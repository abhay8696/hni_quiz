import React, { useContext } from "react";
//contexts
import {
    RandomQuestionsContext,
    UserDataContext,
} from "../../Contexts/AllContexts";
//assets
import correct from "../../assets/correct.svg";
import wrong from "../../assets/wrong.svg";
import Button from "../Button/Button";
import { scrollToElement } from "../../helperFunctions";

const Answers = () => {
    //contexts
    const [randomQuestions, setRandomQuestions] = useContext(
        RandomQuestionsContext
    );

    const correctImg = <img src={correct} alt="correct" className="w-[20px]" />;
    const wrongImg = <img src={wrong} alt="wrong" className="w-[20px]" />;

    const finishButton = (
        <Button text="Finish" clickFunction={() => scrollToElement(`outro`)} />
    );

    //functions
    const displayQuestions = () => {
        let queNo = 1;

        return randomQuestions.map((question) => {
            const { answer, selectedAnswer, options, que } = question;
            const option = (text) => {
                let bg = "";
                if (String(text) === String(answer)) bg = "bg-green-500";
                if (String(text) === String(selectedAnswer)) {
                    if (String(selectedAnswer) !== String(answer))
                        bg = "bg-red-500";
                }
                return (
                    <span
                        className={`${bg} border border-black rounded-xl px-2 py-2`}
                    >
                        {text}
                    </span>
                );
            };

            return (
                <div className="px-[1rem] md:px-[0] justify-between flex flex-col gap-2 max-w-[calc(100vw_-_2rem)] w-[500px] md:min-w-[500px]">
                    <h6 className="text-h6 flex items-start">
                        {String(selectedAnswer) === String(answer)
                            ? correctImg
                            : wrongImg}
                        <span>
                            {`Q.${queNo++} `}
                            {que}
                        </span>
                    </h6>
                    <div className="flex flex-col gap-2">
                        {option(options.a)}
                        {option(options.b)}
                        {option(options.c)}
                        {option(options.d)}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="md:p-[2rem] h-[100vh] flex items-center" id="Answers">
            <div className="min-h-[75vh] text-left flex flex-col justify-center gap-8">
                <h1 className="px-[1rem] md:px-[0] ">Answers</h1>
                <div className="overflow-x-auto h-[75vh] md:h-[auto] flex flex-col md:flex-row gap-8 w-[calc(100vw_-_1rem)] md:w-[calc(100vw_-_4rem)]">
                    {displayQuestions()}
                </div>
                <div className="px-[1rem] md:px-[0]">{finishButton}</div>
            </div>
        </div>
    );
};

export default Answers;
