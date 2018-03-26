// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    // allowImportExportEverywhere: true
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ["standard", "plugin:vue/recommended"],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-statements': ['error', 35],
    // 'no-magic-numbers': ['error', { "enforceConst": true }]
  }
}
