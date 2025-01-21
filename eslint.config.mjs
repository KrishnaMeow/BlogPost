import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Backend files
  {
    files: ["**/*.config.js", "backend/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // Node.js globals
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Frontend files
  {
    files: ["frontend/**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          presets: [
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
      globals: {
        ...globals.browser, // Browser globals
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^React$" },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Jest globals
      },
    },
  },
];
