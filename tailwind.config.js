/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                mainBg: "#faffaf",
                primary: "#0f67b1",
                skyBlue: "#3fa2f6",
                lightBlue: "#96c9f4",
            },
        },
    },
    plugins: [],
};
