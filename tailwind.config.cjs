const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{svelte,js}'],
    theme: {
        extend: {
            // https://tailwindcss.com/docs/font-family#customizing-the-default-font
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
