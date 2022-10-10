module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],

    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-esling"],
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                "no-undef": "off",
            },
        },
        {
            files: ["*.test.ts"],
            env: {
                node: true,
                jest: true,
            },
        },
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
    },
};
