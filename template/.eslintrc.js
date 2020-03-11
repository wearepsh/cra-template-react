module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:import/typescript",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": true
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    plugins: [
        "@typescript-eslint",
        "react",
    ],
    rules: {
        "array-bracket-newline": ["error", "consistent"],
        "arrow-body-style": "warn",
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": "warn",
        "brace-style": "warn",
        "camelcase": "warn",
        "comma-dangle": ["warn", "only-multiline"],
        "comma-spacing": "warn",
        "comma-style": "warn",
        "eol-last": "error",
        "generator-star-spacing": "error",
        "indent": ["error", "tab", { "SwitchCase": 1 }],
        "keyword-spacing": "error",
        "lines-between-class-members": "error",
        "no-extra-boolean-cast": "off",
        "no-console": "error",
        "no-duplicate-imports": "error",
        "no-multi-spaces": "error",
        "no-return-await": "error",
        "no-trailing-spaces": "error",
        "no-useless-concat": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "object-shorthand": "error",
        "prefer-const": "error",
        "quotes": [2, "single"],
        "react/no-danger": "error",
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {
          "anonymous": "never",
          "named": "never",
          "asyncArrow": "always"
        }]
    },
    "overrides": [
        {
          "files": ["serviceWorker.ts"],
          "rules": {
            "quotes": ["error", "single"],
            "no-console": "off",
            "no-mixed-spaces-and-tabs": "off"
          }
        }
    ]
};
