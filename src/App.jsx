import { useState } from "react";
//contexts
import { UserDataContext } from "./Contexts/AllContexts";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import QuizBody from "./components/QuizBody/QuizBody";
import { scrollToElement } from "./helperFunctions";

function App() {
    const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

    //functions
    const handleUserForm = (fullName) => {
        setFullName(fullName);
        scrollToElement("QuizBody");
    };
    return (
        <>
            <div className="w-[100%] h-[100vh] overflow-hidden App">
                <UserDataContext.Provider value={[fullName, setFullName]}>
                    <UserForm handleUserForm={handleUserForm} />
                    <QuizBody />
                </UserDataContext.Provider>
            </div>
        </>
    );
}

export default App;
