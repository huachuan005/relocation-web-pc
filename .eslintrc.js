module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // console
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 忽略缩进
    'indent': 0,
    'eol-last': 0,
    // 不能有声明未使用的变量
    'no-unused-vars': 0,
    // 不能有无用的表达式
    'no-unused-expressions': 0,
    'space-before-function-paren': 0,
    // 三元表达式
    'no-unneeded-ternary': 0,
    // {} 花括号需要空格
    'object-curly-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
