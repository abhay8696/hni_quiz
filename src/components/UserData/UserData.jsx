import React, { useState } from "react";
import Button from "../Button/Button";
import { downloadCSV, getAllUsers } from "../../helperFunctions";

const UserData = () => {
    const [users, setUsers] = useState([]);

    //functions
    const handleClick = async () => {
        const getUsers = await getAllUsers();

        if (getUsers) setUsers(getUsers);
    };

    const displayUsers = () => {
        return users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.contact}</td>
                </tr>
            );
        });
    };

    const displayTable = () => {
        if (users?.length)
            return (
                <table
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    className="capitalize bg-red-400 w-[500px] max-w-[calc(100vw_-_2rem)] text-left "
                >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody className="bg-green-400 max-h-[75vh] overflow-y-auto">
                        {displayUsers()}
                    </tbody>
                </table>
            );
    };

    return (
        <div className="p-4 md:p-8 w-[100vw] min-h-[100vh] flex flex-col items-start gap-4">
            <div className="flex gap-4 flex-wrap">
                <h1>User Data</h1>
                <Button
                    text={users.length ? "refresh" : "click here get users"}
                    clickFunction={handleClick}
                    customClass="w-[auto] capitalize"
                />
                {users.length ? (
                    <Button
                        text="download CSV"
                        clickFunction={() => downloadCSV(users)}
                        customClass="w-[auto] capitalize"
                    />
                ) : null}
            </div>
            {displayTable()}
        </div>
    );
};

export default UserData;
