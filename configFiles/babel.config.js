module.exports = (api) => {
  // enable cacheing
  api.cache(true);

  return {
    presets: ["@sigmadigital/configs/presets/babel"],
  }
};
