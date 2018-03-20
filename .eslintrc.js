module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'], // 要求或禁止末尾逗号：不允许逗号
    'react/no-did-mount-set-state': [0]
  }
};
