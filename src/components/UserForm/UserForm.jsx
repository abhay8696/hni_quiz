import React, { useState } from "react";
import Button from "../Button/Button";
//styles
import "./UserForm.css";
import BGIMG from "../BGIMG/BGIMG";

const UserForm = (props) => {
    //props
    const { handleUserForm } = props;

    //states
    const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
    const [err, SetErr] = useState(false);

    //functions
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "firstName") SetErr(false);
        setFullName({ ...fullName, [name]: value });
    };

    const notValidInput = (input) => {
        // Trim the input to remove leading/trailing spaces and check if it's empty
        return input.trim().length <= 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (notValidInput(fullName.firstName)) SetErr(true);
        else handleUserForm(fullName);
    };
    return (
        // <div className="userForm-wrapper bg-red-300 w-[100vw]">
        <div
            className="relative h-[100vh] w-[100vw] flex items-center justify-center gap-4"
            id="userForm"
            style={{
                background: `url(https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22594_16539922388967007.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="userForm-body flex flex-col justify-around h-[75vh] ">
                <h1 className="text-h2 sm:text-h1 text-left">
                    <span className="bg-mainBg border rounded-xl px-4 py-2">
                        Welcome to HNI Quiz!
                    </span>
                </h1>
                <div className="flex flex-col justify-center gap-8 flex-1">
                    <h2 className="text-h3 sm:text-h2  text-left font-light">
                        <span className="bg-mainBg border rounded-xl px-4 py-2">
                            What is your name?
                        </span>
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-12"
                    >
                        <div className="flex flex-wrap gap-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={fullName.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    autoComplete="off"
                                    className={`text-black capitalize  sm:text-h4  bg-inherit border-b ${
                                        err ? "bg-red-600" : "bg-mainBg"
                                    } outline-none rounded-xl p-2`}
                                />
                                <p className="absolute text-left text-red-600">
                                    {err && "First name is required"}
                                </p>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={fullName.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className={`text-black capitalize  sm:text-h4 p-2 bg-inherit border bg-mainBg rounded-xl  outline-none`}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button
                                text="submit"
                                formButton={true}
                                clickFunction={handleSubmit}
                                customClass="bg-black text-mainBg"
                            />
                        </div>
                    </form>
                    <div>.</div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default UserForm;
