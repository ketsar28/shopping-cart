module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "pages/**/*.vue",
        "layouts/*.vue",
        "src/views/**/*.vue",
        "src/components/*.vue",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
