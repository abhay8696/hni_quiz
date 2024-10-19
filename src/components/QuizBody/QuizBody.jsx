import React, { useContext, useState } from "react";
//components
import Button from "../Button/Button";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import { questionsArray } from "../../QuestionsArray";
import Result from "../Result/Result";
import { RandomQuestionsContext } from "../../Contexts/AllContexts";
import Answers from "../Answers/Answers";
import Outro from "../Outro/Outro";

const QuizBody = () => {
    //contexts
    const [randomQuestions, setRandomQuestions] = useContext(
        RandomQuestionsContext
    );

    const bgUrls = [
        "https://earlysip.in/wp-content/uploads/2022/09/is-a-systematic-investment-plan-a-good-idea.jpg",
        "https://media.licdn.com/dms/image/D4D12AQGs4BSpCPYh_Q/article-cover_image-shrink_600_2000/0/1709148215717?e=2147483647&v=beta&t=aO81ZkZL2ozNfy_hCFiy0CbMT03WQTJjZTK0mvkoy3g",
        "https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/what-are-financial-goals-meaning-types-and-benefits.jpg",
        "https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/why-is-financial-planning-important.jpg",
        "https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/importance-of-financial-planning.jpg",
        "https://img.favpng.com/13/6/12/chart-finance-financial-plan-investment-png-favpng-0mnVbk5Ty33ak7eEvyVV3t3Uw.jpg",
        "https://media.istockphoto.com/id/1181024482/photo/medical-finance-insurance.jpg?s=612x612&w=0&k=20&c=vFUgCpg5RMQwgbZSds6A5oZKP1Vn-cdwtAOW6DwxY5A=",
    ];
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
                    bgUrl={bgUrls[queNO]}
                />
            );
        });
    };
    return (
        <div className="h-[100vh]" id="QuizBody">
            <QuizIntro />
            {displayQuestions()}
            <Result />
            <Answers />
            <Outro />
        </div>
    );
};

export default QuizBody;
