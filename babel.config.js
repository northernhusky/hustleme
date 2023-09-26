const pak = require('./package.json');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        },
      ],
      'react-native-reanimated/plugin' // PUT IT HERE
    ]
  };
};
