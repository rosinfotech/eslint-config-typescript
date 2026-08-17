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

## TypeScript 7+ (native) compatibility

`typescript@7` is the native (Go-based) compiler: it does not ship the JavaScript compiler
API that `typescript-eslint` requires for parsing and type-aware linting. This config declares
`"typescript": ">=4.8.4"` with no upper bound, so it installs cleanly in TypeScript 7+ projects.

For a TypeScript 7 project, follow the
[official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0):
alias `typescript` to the JS-based compatibility package `@typescript/typescript6`
(feature-aligned with TypeScript 7) and alias TypeScript 7 under a separate name:

```json
// package.json
{
    "devDependencies": {
        "@rosinfo.tech/eslint-config-typescript": "^0.1.0",
        "@typescript/native": "npm:typescript@^7.0.2",
        "eslint": "^9.0.0 || ^10.0.0",
        "typescript": "npm:@typescript/typescript6@^6.0.2",
        "typescript-eslint": "^8.67.0"
    }
}
```

With this setup:

```sh
npx tsc --noEmit   # runs TypeScript 7 (native)
npx eslint .       # typescript-eslint lints via the TypeScript 6 API
```

`typescript-eslint` is expected to gain native TypeScript >=7.1 support once TypeScript 7.1
ships its new API; until then the alias setup above is the supported path.

