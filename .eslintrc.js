module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
    ],
    globals: {
        test: 'readonly',
        expect: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: '16.13',
        },
    },
    plugins: [
        'react'
    ],
    rules: {
        'indent': ['error', 4],
        'jsx-a11y/label-has-associated-control': [2, {assert: 'either'}],
        'max-len': ['warn', { 'code': 120 }],
        'no-console': 0,
        'no-debugger': 0,
        'no-plusplus': 0,
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-one-expression-per-line': 0,
        'react/no-unescaped-entities': 0,
    },
};
