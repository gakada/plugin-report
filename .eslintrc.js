module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'import',
  ],
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', {'allow': ['warn', 'error']}],
    'no-var': 'error',
    'no-unused-vars': ['warn', {'args': 'none'}],
    'semi': ['error', 'never'],
    'unicode-bom': 'error',
    'react/prop-types': 'off',
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.es', '.coffee', '.cjsx'],
        'paths': [__dirname],
      },
    },
    'import/core-modules': [
      'bluebird',
      'electron',
      'redux-observers',
      'reselect',
      'react-bootstrap',
      'react-fontawesome',
      'request',
      'path-extra',
      'fs-extra',
      'lodash',
      'cson',
      'moment',
      'views/utils/selectors',
    ],
  },
}
