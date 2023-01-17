"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { execOnlyOnce } = require('../utils/executed_seed');
const { createStrapiAdmin } = require('./strapi_admin');
const initSeeders = async () => {
    await execOnlyOnce('admin_users', createStrapiAdmin);
};
module.exports = { initSeeders };
