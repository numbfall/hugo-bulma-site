module.exports = {
    plugins: {
        'postcss-uncss': {
            html: [
                'layouts/**/*.html'
            ]
        },
        'autoprefixer': {
            browsers: [
                "last 2 versions"
            ]
        }
    },
}
