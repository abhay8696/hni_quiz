import { useState } from "react";
//contexts
import {
    RandomQuestionsContext,
    UserDataContext,
} from "./Contexts/AllContexts";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import QuizBody from "./components/QuizBody/QuizBody";
import { scrollToElement } from "./helperFunctions";
import Result from "./components/Result/Result";
import { questionsArray } from "./QuestionsArray";
import HNILink from "./components/Links/HNILink";

function App() {
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
        contact: "",
    });
    const [randomQuestions, setRandomQuestions] = useState([]);

    //functions
    const handleUserForm = (fullName) => {
        setFullName(fullName);
        scrollToElement("QuizBody");
        selectFiveRandom();
    };

    const selectFiveRandom = () => {
        //create array with 5 random questions
        let newQueArr = [...questionsArray];
        let len = 0;
        let randomFive = [];

        while (len < 5) {
            const index = Math.floor(Math.random() * newQueArr.length);
            let que = newQueArr.splice(index, 1)[0];
            len++;
            randomFive.push({ ...que, selectedAnswer: null });
        }
        // setTempArr([...randomFive]);

        setRandomQuestions(randomFive);
    };

    return (
        <>
            <div className="w-[100%] h-[100vh] overflow-hidden App">
                <UserDataContext.Provider value={[fullName, setFullName]}>
                    <UserForm handleUserForm={handleUserForm} />
                    <RandomQuestionsContext.Provider
                        value={[randomQuestions, setRandomQuestions]}
                    >
                        <QuizBody />
                        <HNILink />
                    </RandomQuestionsContext.Provider>
                </UserDataContext.Provider>
            </div>
        </>
    );
}

export default App;
