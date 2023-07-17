const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve('./src', 'chrono.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Chrono.js',
    library: {
      name: 'Chronojs',
      type: 'var',
    },
  },
};
