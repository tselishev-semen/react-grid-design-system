module.exports = {
    singleQuote: true,
    bracketSpacing: false,
    arrowParens: 'always',
    printWidth: 120,
    overrides: [
        {
            files: '*.scss',
            options: {
                singleQuote: false
            }
        }
    ],
    quoteProps: 'preserve'
};
