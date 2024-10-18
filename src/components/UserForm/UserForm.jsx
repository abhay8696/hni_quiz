import React, { useState } from "react";
import Button from "../Button/Button";

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
        <div
            className="h-[100vh] flex items-center justify-center"
            id="userForm"
        >
            <div className="flex flex-col justify-around h-[75vh]">
                <h1 className="text-h2 sm:text-h1 text-left">
                    Welcome to HNI Quiz!
                </h1>
                <div className="flex flex-col justify-center gap-8 flex-1">
                    <h2 className="text-h3 sm:text-h2  text-left">
                        What is your name?
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
                                    className={`text-black capitalize text-h5 sm:text-h4 py-1 bg-inherit border-b ${
                                        err
                                            ? "border-red-600"
                                            : "border-primary"
                                    } outline-none`}
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
                                    className={`text-black capitalize text-h5 sm:text-h4 py-1 bg-inherit border-b border-primary outline-none`}
                                />
                            </div>
                        </div>
                        <Button
                            text="Submit"
                            formButton={true}
                            clickFunction={handleSubmit}
                        />
                    </form>
                    <div>.</div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
