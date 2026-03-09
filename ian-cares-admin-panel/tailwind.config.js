/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1A6B96",
                secondary: "#FDB913",
            },
            screens: {
                'md': '1250px',
                'lg': '1250px',
            }
        },
    },
    plugins: [],
}
