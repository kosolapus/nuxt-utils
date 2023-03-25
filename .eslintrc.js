module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'autofix'],
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    amd: true,
  },
  rules: {
    'vue/no-v-html': 'off',
    // 'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'autofix/no-debugger': 'error',
    'vue/no-v-for-template-key': 'off',
  },
};
