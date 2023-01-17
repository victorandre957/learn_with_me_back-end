'use strict';

/**
 * executed-seed service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executed-seed.executed-seed');
