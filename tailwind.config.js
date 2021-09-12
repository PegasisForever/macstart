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
                    150: '#ECECEE',
                    250: '#DCDCE0',
                    350: '#BBBBC1',
                    600: '#535154',
                    650: '#494951',
                    750: '#333338',
                },
                blue: {
                    150: '#CDE3FE',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
