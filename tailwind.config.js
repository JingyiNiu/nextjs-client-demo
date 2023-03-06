/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            slate:colors.slate,
            gray:colors.gray,
            zinc:colors.zinc,
            neutral:colors.neutral,
            stone:colors.stone,
            red:colors.red,
            orange:colors.orange,
            amber:colors.amber,
            yellow:colors.yellow,
            lime:colors.lime,
            green:colors.green,
            emerald:colors.emerald,
            teal:colors.teal,
            cyan:colors.cyan,
            sky:colors.sky,
            blue:colors.blue,
            indigo:colors.indigo,
            violet:colors.violet,
            purple:colors.purple,
            fuchsia:colors.fuchsia,
            pink:colors.pink,
            rose:colors.rose,

            primary: '#86d1d6',
            primary800: '#65bdc4',
            secondary: '#9DC08B',
            dark: '#16181a',
            light: '#f5f5f5',
            white: '#ffffff',
        },
    },
    plugins: [],
};
