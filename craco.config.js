const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@multi-select": path.resolve(__dirname, "src/components/select/multi-select"),
    },
  },
};
