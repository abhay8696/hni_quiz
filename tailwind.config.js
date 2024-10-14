/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                mainBg: "#faffaf",
                primary: "#000000",
                // primary: "#0f67b1",
                skyBlue: "#3fa2f6",
                lightBlue: "#96c9f4",
            },
            fontSize: {
                h1: ["3.1875rem", { lineHeight: "3.5rem" }], // 51px
                h2: ["2.25rem", { lineHeight: "2.5rem" }], // 36px
                h3: ["1.875rem", { lineHeight: "2.25rem" }], // 30px
                h4: ["1.5rem", { lineHeight: "2rem" }], // 24px
                h5: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
                h6: ["1rem", { lineHeight: "1.5rem" }], // 16px
            },
        },
    },
    plugins: [],
};
