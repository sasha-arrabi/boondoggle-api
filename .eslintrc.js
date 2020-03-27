module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './test/tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    jasmine: true
  },
  extends: [
    'eslint:recommended',
    'jasmine',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/parser": 1
  }
};
