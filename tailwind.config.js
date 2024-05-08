/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#0F5133',
                'secondary': ' #6c757d',
                'success': ' #28a745',
                'info': '#17a2b8'
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    important: true,
    prefix: "tw-",

}