const path = require("path");

const resolvePath = (p: string) => path.resolve(__dirname, p);

module.exports = {
  reactScriptsVersion: "react-scripts",

  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@store": resolvePath("./src/store"),
      "@services": resolvePath("./src/services"),
      "@data": resolvePath("./src/data"),
      "@app": resolvePath("./src"),
    },
  },
};

export {};
