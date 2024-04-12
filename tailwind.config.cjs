/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        fontFamily: {
            sans: ['Jetbrains Mono']
        },
        extend: {
            colors: {
                funpink: '#F488BA',
                crazyorange: '#FF9900',
                groovyblue: '#3A33A4'

            }
        }
    },

    plugins: []
};

module.exports = config;