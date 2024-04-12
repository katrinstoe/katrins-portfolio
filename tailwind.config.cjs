/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        fontFamily: {
            sans: ['Jetbrains Mono']
        },
        extend: {
            colors: {
                funpink: {}
            }
        }
    },

    plugins: []
};

module.exports = config;