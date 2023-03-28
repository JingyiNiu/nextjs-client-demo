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
        extend: {
            colors: {
                primary: { 100: '#eef6f7', 500: '#86d1d6', 800: '#65bdc4', 900: '#038894' },
                secondary: { 500: '#9DC08B' },
                dark: '#16181a',
                light: '#f5f5f5',
                white: '#ffffff',
            },
        },
    },
    plugins: [],
};
