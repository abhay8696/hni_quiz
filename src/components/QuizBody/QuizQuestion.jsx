import React from "react";
import Button from "../Button/Button";
import { scrollToElement } from "../../helperFunctions";
import { questionsArray } from "../../QuestionsArray";

const QuizQuestion = (props) => {
    //props
    const { queID, data, queNo } = props;

    const introButton = (
        <Button
            text="Intro"
            clickFunction={() => scrollToElement(`QuizBody`)}
        />
    );
    const preButton = (
        <Button
            text="Previous"
            clickFunction={() => scrollToElement(`que-${queNo - 1}`)}
        />
    );

    const nextButton = (
        <Button
            text="Next"
            clickFunction={() => scrollToElement(`que-${queNo + 1}`)}
        />
    );

    const finishButton = (
        <Button
            text="Finish"
            clickFunction={() => scrollToElement(`que-${queNo + 1}`)}
        />
    );

    const radioButton = (value, id) => {
        return (
            <div className="flex items-center border border-[#00000086] rounded-xl">
                <input
                    type="radio"
                    id={id}
                    name={`${queID}Option`}
                    value={value}
                    className="my-4 ml-4"
                />
                <label for={id} className="flex-1 py-4 border rounded-xl">
                    {value}
                </label>
            </div>
        );
    };
    return (
        <div className="h-[100vh] flex items-center" id={queID}>
            <div className="h-[75vh] text-left flex flex-col justify-center gap-16">
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col items-baseline gap-2">
                        <h6 className="capitalize text-h6">{`Q.${queNo} `}</h6>
                        <h2 className="text-h2 font-thin">
                            {/* <span className="font-bold">{`Q.${queNo}) `}</span> */}
                            {data.que}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        {radioButton(data.options.a, `${queID}-optionA`)}
                        {radioButton(data.options.b, `${queID}-optionB`)}
                        {radioButton(data.options.c, `${queID}-optionC`)}
                        {radioButton(data.options.d, `${queID}-optionD`)}
                    </div>
                </div>
                <div className="flex gap-4">
                    {queNo > 1 ? preButton : introButton}
                    {queNo < questionsArray.length ? nextButton : finishButton}
                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;
