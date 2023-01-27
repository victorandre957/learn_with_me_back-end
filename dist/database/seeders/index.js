"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { execOnlyOnce } = require('../utils/executed_seed');
const { createStrapiAdmin } = require('./strapi_admin');
const { createPerson } = require('./person');
const { createRoles } = require('./person_roles');
const initSeeders = async () => {
    await execOnlyOnce('admin_users', createStrapiAdmin);
    await execOnlyOnce('person_roles', createRoles);
    await execOnlyOnce('person', createPerson);
};
module.exports = { initSeeders };
