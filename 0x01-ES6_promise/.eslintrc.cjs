module.exports = {
  extends: ["airbnb-base"],
  plugins: ["import"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
      },
    ],
    "no-console": "off",  // Disable no-console rule
  },

};
