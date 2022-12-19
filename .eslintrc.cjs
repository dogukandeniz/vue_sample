/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'vue/max-len': 'off',
    'vue/no-return-assign': 'off',
    'vue/no-underscore-dangle': 'off',
    'vue/no-param-reassign': 'off',
    'vue/prefer-default-export': 'off',
    'vue/import/prefer-default-export': 'off',
    'vue/import/no-cycle': 'off',
    'vue/import/extensions': 'off',
    'vue/global-require': 'off',
    'vue/consistent-return': 'off',
    'vue/no-restricted-globals': 'off',
    'vue/no-unused-expressions': 'off',
    'vue/no-prototype-builtins': 'off',
    'vue/no-shadow': 'off',
    'vue/space-before-function-paren': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
