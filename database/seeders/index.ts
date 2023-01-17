export default {}
const { execOnlyOnce } = require('../utils/executed_seed');

const { createStrapiAdmin } = require('./strapi_admin');

const initSeeders = async () => {
  await execOnlyOnce('admin_users', createStrapiAdmin);
};

module.exports = { initSeeders };
