import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "html/**",
      "public/**",
      "assets/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    ...react.configs.flat.recommended,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    settings: { react: { version: "detect" } },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
];
