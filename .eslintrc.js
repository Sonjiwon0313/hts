module.exports = {
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "max-len": ["error", { code: 150, ignoreTemplateLiterals: true }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "Qtypescript-eslint/lines-between-class-members": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
  },
};
