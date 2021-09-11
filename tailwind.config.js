const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: {
                    ...colors.gray,
                    600: '#535154',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
