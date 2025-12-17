[![rosinfo.tech](https://cdn.rosinfo.tech/id/logo/id_logo_width_160.svg "rosinfo.tech")](https://rosinfo.tech)

# eslint.config.js config example with eslint-config-typescript

```js
// eslint.config.js

import js from "@eslint/js";
import importConfig from "@rosinfo.tech/eslint-config-import";
import javascriptConfig from "@rosinfo.tech/eslint-config-javascript";
import reactConfig from "@rosinfo.tech/eslint-config-react";
import typescriptConfig from "@rosinfo.tech/eslint-config-typescript"; ///
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import typescriptPlugin from "typescript-eslint";


export default [
    {
        ignores: [
            "**/*.min.js",
            "**/.vscode/",
            "**/android/",
            "**/build/",
            "**/coverage/",
            "**/ios/",
            "**/node_modules/",
        ],
    },

    js.configs.recommended,

    ...typescriptPlugin.configs.recommended,

    ...(Array.isArray(reactConfig) ? reactConfig : [reactConfig]),

    {
        files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],

        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
                NodeJS: "readable",
                TUnstable: "readable",
                TUnstables: "readable",
            },
        },

        plugins: {
            ...(reactConfig.plugins || {}),
            ...(javascriptConfig.plugins || {}),
            ...(importConfig.plugins || {}),
            ...(typescriptConfig.plugins || {}),
        },

        rules: {
            ...(reactConfig.disabledRules || {}),
            ...(javascriptConfig.disabledRules || {}),
            ...(importConfig.disabledRules || {}),
            ...(typescriptConfig.disabledRules || {}),

            ...(reactConfig.rules || {}),
            ...(javascriptConfig.rules || {}),
            ...(importConfig.rules || {}),
            ...(typescriptConfig.rules || {}),
        },

        settings: {
            ...(reactConfig.settings || {}),
            ...(javascriptConfig.settings || {}),
            ...(importConfig.settings || {}),
            ...(typescriptConfig.settings || {}),
        },
    },

    eslintConfigPrettier,
];
```
