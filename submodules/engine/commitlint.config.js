module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'body-max-line-length': [2, 'always', 1000],
    'footer-max-line-length': [2, 'always', 1000],
    'header-max-length': [2, 'always', 1000],
  },
};
