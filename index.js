module.exports = {
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": 1,
        "@typescript-eslint/array-type": [
            1,
            {
                "default": "array-simple",
                "readonly": "array-simple"
            }
        ],
        "@typescript-eslint/await-thenable": 1,
        "@typescript-eslint/ban-ts-comment": [
            1,
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": "allow-with-description"
            }
        ],
        "@typescript-eslint/ban-types": [
            1,
            {
                "types": {
                    "String": {
                        "message": "Use string instead",
                        "fixWith": "string"
                    },
                    "Number": {
                        "message": "Use number instead",
                        "fixWith": "number"
                    },
                    "Boolean": {
                        "message": "Use boolean instead",
                        "fixWith": "boolean"
                    },
                    "Symbol": {
                        "message": "Use symbol instead",
                        "fixWith": "symbol"
                    },
                    "{}": {
                        "message": "Use object instead",
                        "fixWith": "object"
                    }
                }
            }
        ],
        "brace-style": 0,
        "@typescript-eslint/brace-style": [
            1,
            "1tbs"
        ],
        "@typescript-eslint/class-literal-property-style": [
            1,
            "fields"
        ],
        "comma-spacing": 0,
        "@typescript-eslint/comma-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "@typescript-eslint/consistent-type-assertions": 0,
        "@typescript-eslint/consistent-type-definitions": [
            1,
            "interface"
        ],
        "@typescript-eslint/default-param-last": 1,
        "dot-notation": 0,
        "@typescript-eslint/dot-notation": 1,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": [
            1,
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "no-public",
                    "methods": "explicit",
                    "properties": "off",
                    "parameterProperties": "explicit"
                }
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "func-call-spacing": 0,
        "@typescript-eslint/func-call-spacing": [
            1,
            "never"
        ],
        "indent": 0,
        "@typescript-eslint/indent": [
            1,
            4,
            {
                "SwitchCase": 1,
                "ignoreComments": false
            }
        ],
        "keyword-spacing": 0,
        "@typescript-eslint/keyword-spacing": [
            1,
            {
                "before": true,
                "after": true
            }
        ],
        "lines-between-class-members": 0,
        "@typescript-eslint/lines-between-class-members": [
            1,
            "always"
        ],
        "@typescript-eslint/member-delimiter-style": [
            1,
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            1,
            {
                "default": [
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-decorated-field",
                    "protected-decorated-field",
                    "private-decorated-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "public-abstract-field",
                    "protected-abstract-field",
                    "private-abstract-field",
                    "public-field",
                    "protected-field",
                    "private-field",
                    "static-field",
                    "instance-field",
                    "abstract-field",
                    "decorated-field",
                    "field",
                    "signature",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "constructor",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "public-decorated-method",
                    "protected-decorated-method",
                    "private-decorated-method",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "public-abstract-method",
                    "protected-abstract-method",
                    "private-abstract-method",
                    "public-method",
                    "protected-method",
                    "private-method",
                    "static-method",
                    "instance-method",
                    "abstract-method",
                    "decorated-method",
                    "method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": [
            1,
            "property"
        ],
        "@typescript-eslint/naming-convention": 0,
        "@typescript-eslint/no-array-constructor": 1,
        "@typescript-eslint/no-base-to-string": 1,
        "@typescript-eslint/no-confusing-non-null-assertion": 1,
        "@typescript-eslint/no-dupe-class-members": 1,
        "@typescript-eslint/no-dynamic-delete": 1,
        "@typescript-eslint/no-empty-function": 1,
        "@typescript-eslint/no-empty-interface": [
            1,
            {
                "allowSingleExtends": false
            }
        ],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-extra-non-null-assertion": 1,
        "@typescript-eslint/no-extra-parens": [
            1,
            "all",
            { "ignoreJSX": "multi-line" }
        ],
        "@typescript-eslint/no-extra-semi": 1,
        "@typescript-eslint/no-extraneous-class": [
            1,
            {
                "allowConstructorOnly": false,
                "allowEmpty": false,
                "allowStaticOnly": false,
                "allowWithDecorator": false
            }
        ],
        "@typescript-eslint/no-floating-promises": [
            1,
            {
                "ignoreVoid": true,
                "ignoreIIFE": true
            }
        ],
        "@typescript-eslint/no-for-in-array": 1,
        "@typescript-eslint/no-implied-eval": 1,
        "@typescript-eslint/no-inferrable-types": [
            1,
            {
                "ignoreParameters": false,
                "ignoreProperties": false
            }
        ],
        "@typescript-eslint/no-invalid-void-type": [
            1,
            {
                "allowInGenericTypeArguments": true
            }
        ],
        "@typescript-eslint/no-loss-of-precision": 1,
        "no-magic-numbers": 0,
        "@typescript-eslint/no-magic-numbers": [
            1,
            {
                "ignore":[
                    -1,
                    0,
                    1
                ]
            }
        ],
        "@typescript-eslint/no-misused-new": 1,
        "@typescript-eslint/no-misused-promises": [
            1,
            {
                "checksVoidReturn": true,
                "checksConditionals": true
            }
        ],
        "@typescript-eslint/no-namespace": [
            1,
            {
                "allowDeclarations": true,
                "allowDefinitionFiles": true
            }
        ],
        "@typescript-eslint/no-non-null-asserted-optional-chain": 1,
        "@typescript-eslint/no-non-null-assertion": 1,
        "@typescript-eslint/no-require-imports": 1,
        "@typescript-eslint/no-this-alias": [
            1,
            {
                "allowDestructuring": true,
                "allowedNames": [
                    "self"
                ]
            }
        ],
        "@typescript-eslint/no-throw-literal": 1,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
            1,
            {
                "allowComparingNullableBooleansToTrue": true,
                "allowComparingNullableBooleansToFalse": true
            }
        ],
        "@typescript-eslint/no-unnecessary-condition": [
            1,
            {
                "allowConstantLoopConditions": false
            }
        ],
        "@typescript-eslint/no-unnecessary-qualifier": 1,
        "@typescript-eslint/no-unnecessary-type-arguments": 1,
        "@typescript-eslint/no-unnecessary-type-assertion": 1,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 1,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unsafe-return": 0,
        "no-unused-expressions": 0,
        "@typescript-eslint/no-unused-expressions": [
            1,
            {
                "allowShortCircuit": true,
                "allowTernary": false,
                "allowTaggedTemplates": false
            }
        ],
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "no-use-before-define": 0,
        "@typescript-eslint/no-use-before-define": [
            1,
            {
                "functions": false,
                "classes": false,
                "variables": true,
                "enums": true,
                "typedefs": true
            }
        ],
        "no-useless-constructor": 0,
        "@typescript-eslint/no-useless-constructor": 1,
        "@typescript-eslint/no-var-requires": 1,
        "@typescript-eslint/prefer-as-const": 1,
        "@typescript-eslint/prefer-for-of": 1,
        "@typescript-eslint/prefer-function-type": 1,
        "@typescript-eslint/prefer-includes": 1,
        "@typescript-eslint/prefer-literal-enum-member": 1,
        "@typescript-eslint/prefer-namespace-keyword": 1,
        "@typescript-eslint/prefer-nullish-coalescing": 1,
        "@typescript-eslint/prefer-optional-chain": 1,
        "@typescript-eslint/prefer-readonly-parameter-types": 0,
        "@typescript-eslint/prefer-readonly": 1,
        "@typescript-eslint/prefer-reduce-type-parameter": 1,
        "@typescript-eslint/prefer-regexp-exec": 1,
        "@typescript-eslint/prefer-string-starts-ends-with": 1,
        "@typescript-eslint/prefer-ts-expect-error": 1,
        "@typescript-eslint/promise-function-async": 1,
        "quotes": 0,
        "@typescript-eslint/quotes": [
            1,
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "@typescript-eslint/require-array-sort-compare": 1,
        "@typescript-eslint/require-await": 1,
        "@typescript-eslint/restrict-plus-operands": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "return-await": 0,
        "@typescript-eslint/return-await": 1,
        "semi": 0,
        "@typescript-eslint/semi": [
            1,
            "always"
        ],
        "space-before-function-paren": 0,
        "@typescript-eslint/space-before-function-paren": 1,
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/switch-exhaustiveness-check": 1,
        "@typescript-eslint/triple-slash-reference": 1,
        "@typescript-eslint/type-annotation-spacing": [
            1,
            {
                "before": false,
                "after": false,
                "overrides": {
                    "arrow": {
                        "before": true,
                        "after": true
                    },
                    "colon": {
                        "before": false,
                        "after": false
                    }
                }
            }
        ],
        "@typescript-eslint/typedef": [
            1,
            {
                "arrayDestructuring": false,
                "arrowParameter": false,
                "memberVariableDeclaration": true,
                "objectDestructuring": false,
                "parameter": false,
                "propertyDeclaration": true,
                "variableDeclaration": false,
                "variableDeclarationIgnoreFunction": true
            }
        ],
        "@typescript-eslint/unbound-method": [
            1,
            {
                "ignoreStatic": true
            }
        ],
        "@typescript-eslint/unified-signatures": 1
    }
}