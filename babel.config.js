module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
// next.config.js
module.exports = {
  future: {
    webpack5: true,
  },
  target: 'serverless'
}