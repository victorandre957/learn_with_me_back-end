'use strict';
/**
 * executed-seed router.
 */
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::executed-seed.executed-seed', {
    only: [],
});
