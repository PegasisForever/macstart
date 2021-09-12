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
                    150: '#F4F4F5',
                    600: '#535154',
                    350: '#babac1',
                },
                blue: {
                    150: '#DBEAFE',
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
