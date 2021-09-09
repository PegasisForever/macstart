module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                card: '22rem',
            },
            minWidth: {
                card: '18rem',
            },
            widths:{
                '88':'22rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
