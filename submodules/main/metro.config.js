const resolve = require('path').resolve;
const fs = require('fs');
const ROOT_FOLDER = resolve(__dirname, '.');

module.exports = {
  transformer: {
    getTransformOptions: async (_, { platform }) => {
      let modulePaths = [];
      const moduleMap = {};

      if (platform === 'android') {
        modulePaths = require('./packager/modules.android');
      } else {
        modulePaths = require('./packager/modules.android');
      }

      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });

      return {
        preloadedModules: moduleMap,
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
          minifierPath: require.resolve('metro-minify-esbuild'),
        },
      };
    },
  },
  projectRoot: ROOT_FOLDER,
};
