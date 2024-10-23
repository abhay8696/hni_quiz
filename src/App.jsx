import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//components
import MainApp from "./components/MainApp/MainApp";
import UserData from "./components/UserData/UserData";

function App() {
    //functions
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainApp />,
        },
        {
            path: "/userdata",
            element: <UserData />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
