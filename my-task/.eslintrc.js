module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: false }],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': ['warn'],
        'no-console': ['warn'],
    },
}
