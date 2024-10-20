import React, { useContext } from "react";
//contexts
import { UserDataContext } from "../../Contexts/AllContexts";
import Button from "../Button/Button";

const Outro = () => {
    //contexts
    const [fullName, setFullName] = useContext(UserDataContext);
    return (
        <div className="md:p-[2rem] h-[100vh] flex items-center" id={"outro"}>
            <div className="px-[1rem] md:px-[0] min-h-[75vh] text-left flex flex-col justify-center gap-8 max-w-[calc(100vw_-_2rem)]">
                <h1 className="text-h2 md:text-h1">
                    Thank you {fullName.firstName || ""} for taking your time!
                </h1>
                <Button
                    text="Restart"
                    clickFunction={() => window.location.reload()}
                />
            </div>
        </div>
    );
};

export default Outro;
