import typescriptPlugin from 'typescript-eslint';


export default {
    plugins: {
        '@typescript-eslint': typescriptPlugin.plugin,
    },

    disabledRules: {
        '@typescript-eslint/quotes': 'off',
    },

    rules: {
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'separate-type-imports',
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format  : null,
                prefix  : ['I'],
                selector: 'interface',
            },
            {
                format  : null,
                prefix  : ['T'],
                selector: 'typeAlias',
            },
            {
                format  : null,
                prefix  : ['E'],
                selector: 'enum',
            },
            {
                format  : null,
                prefix  : ['G'],
                selector: 'typeParameter',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern        : '^_',
                caughtErrorsIgnorePattern: '^_',
                varsIgnorePattern        : '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': [
            'warn',
            {
                classes  : false,
                enums    : true,
                functions: false,
                typedefs : true,
                variables: true,
            },
        ],
    },

    settings: {},
};
