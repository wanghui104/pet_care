export default [
  {
    ignores: [
      ".next/**",
      ".npm-cache/**",
      "chrome-profile/**",
      "node_modules/**",
      "out/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-unused-vars": "error",
    },
  },
];
