const path = require('path');
/**
 *
 * @param {string} assetName name and extension of the file inside the folder 'database/seeders/assets'
 * @returns the id of the created resource
 */
module.exports = async (assetName) => {
  const assetPath = path.resolve('database/seeders/assets/' + assetName);
  const ret = await strapi.plugins['upload'].services.upload.upload({
    data: {
      fileInfo: {},
    },
    files: {
      path: assetPath,
      name: assetName,
      type: '',
    },
  });
  return ret[0].id;
};
