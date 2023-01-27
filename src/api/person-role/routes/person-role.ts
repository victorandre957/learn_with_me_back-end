'use strict';
export default {}
/**
 * person-role router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::person-role.person-role', {
  only: ['find', 'findOne'],
});
