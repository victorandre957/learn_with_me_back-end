'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/**
 * person-role router.
 */
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::person-role.person-role', {
    only: ['find', 'findOne'],
});
