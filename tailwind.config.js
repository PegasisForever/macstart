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
                '96': '24rem',
            },
            spacing: {
                '88': '22rem',
                '128': '32rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
