module.exports = {
    plugins: {
        'postcss-uncss': {
            html: [
                'layouts/**/*.html'
            ],
            ignore: [
                "/^#js/"
            ]
        },
        'autoprefixer': {
            browsers: [
                "last 2 versions"
            ]
        }
    },
}
