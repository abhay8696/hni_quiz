import React, { useState } from "react";
import Button from "../Button/Button";

const UserForm = (props) => {
    //props
    const { handleUserForm } = props;

    //states
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
        contact: "",
    });
    const [nameError, SetNameError] = useState(false);
    const [contactError, SetContactError] = useState(false);

    //functions
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "firstName") SetNameError(false);
        if (name === "contact") SetContactError(false);
        setFullName({ ...fullName, [name]: value });
    };

    const notValidName = (input) => {
        // Trim the input to remove leading/trailing spaces and check if it's empty
        return input.trim().length <= 0;
    };

    const notValidContact = (input) => {
        // Trim the input to remove leading/trailing spaces and check if it's empty
        return String(input).length !== 10;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (notValidName(fullName.firstName)) SetNameError(true);
        else if (notValidContact(fullName.contact)) SetContactError(true);
        else handleUserForm(fullName);
    };
    return (
        <div
            className="md:p-[2rem] h-[100vh] w-[100vw] flex items-end md:items-center justify-start relative"
            id="userForm"
        >
            <div
                className="bgImg-bottom absolute h-[100vh] w-[100vw] md:w-[50vw] right-0 "
                style={{
                    background: `url(https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22594_16539922388967007.jpg)`,
                    backgroundSize: "contain",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="px-[1rem] md:px-[0] absolute flex flex-col justify-start h-[60vh] md:h-[75vh] w-[calc(100vw_-_2rem)]">
                <h1 className="text-h2 sm:text-h1 text-left font-bold">
                    Welcome to HNI Quiz!
                </h1>
                <div className="flex flex-col justify-center gap-8 flex-1">
                    <h2 className="text-h3 sm:text-h2 text-left">
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
                                        nameError
                                            ? "border-red-600"
                                            : "border-primary"
                                    } outline-none`}
                                />
                                <p className="absolute text-left text-red-600">
                                    {nameError && "First name is required"}
                                </p>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={fullName.lastName}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Last Name"
                                    className={`text-black capitalize text-h5 sm:text-h4 py-1 bg-inherit border-b border-primary outline-none`}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="contact"
                                    id="contact"
                                    value={fullName.contact}
                                    onChange={handleChange}
                                    placeholder="Contact"
                                    required
                                    autoComplete="off"
                                    className={`text-black capitalize text-h5 sm:text-h4 py-1 bg-inherit border-b ${
                                        contactError
                                            ? "border-red-600"
                                            : "border-primary"
                                    } outline-none`}
                                />
                                <p className="absolute text-left text-red-600">
                                    {contactError && "Enter a valid Contact"}
                                </p>
                            </div>
                        </div>
                        <Button
                            text="submit"
                            formButton={true}
                            clickFunction={handleSubmit}
                            customClass="bg-black md:bg-inherit text-mainBg md:text-black"
                        />
                    </form>
                    <div>.</div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
