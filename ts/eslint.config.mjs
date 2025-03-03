import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Configuration for all TypeScript files:
  {
    files: ["**/*.ts"],
    languageOptions: {
      // Use the TypeScript parser
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json", 
        tsconfigRootDir: __dirname,
        ecmaVersion: 12,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },

    rules: {
      semi: ["error", "always"],
      '@typescript-eslint/naming-convention': [
				'warn',
				{
					"selector": 'function',
					"format": ['camelCase'],
				},
        {
          "selector": "import",
          "format": ["camelCase", "PascalCase"],
        },
        {
          "selector": "class",
          "format": ["PascalCase"],
        },
        {
          "selector": "default",
          "format": ["camelCase"],
          "leadingUnderscore": "forbid"
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"]
        },
        {
          "selector": "typeParameter",
          "format": ["PascalCase"],
          "prefix": ["T", "K"]
        },
        {
          "selector": "enumMember",
          "format": ["UPPER_CASE"]
        }
      ],
      "arrow-parens": ["warn", "as-needed"],
      "block-spacing": ["warn", "always"],
      "curly": ["warn", "all"],
      "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
      "no-unused-vars": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
          "accessibility": "no-public",
          "overrides": {
            "parameterProperties": "explicit"
          }
        }
      ],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "max-statements-per-line": ["warn", { "max": 1 }],
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "warn",
      "one-var-declaration-per-line": ["warn", "always"],
      "operator-assignment": ["warn", "always"],
      "operator-linebreak": ["warn", "none"],
      "no-else-return": "warn",
    },
  },
  ...compat.extends("eslint:recommended"),
];