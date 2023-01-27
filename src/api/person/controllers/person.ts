'use strict';
export default {}
/**
 *  person controller
 */

const { validateEmailBodyAccess } = require('./validations/person');
const {
  isCustomerLinkSuitability,
} = require('../../../utils/check-permission');
const { createCoreController } = require('@strapi/strapi').factories;
const { validatePasswordBodySchema } = require('./validations/auth');
const { allowColumnAccess } = require('../../../utils/allowColumnAccess');
const { rolesOf } = require('../../../utils/columnPermission');

module.exports = createCoreController('api::person.person', ({ strapi }) => ({
  async create(ctx) {
    // only admin can setup the person roles, for the rest the default role will be "customer"
    allowColumnAccess({ person_roles: rolesOf.administrator, customer: [], collaborator: [] }, ctx);
    return super.create(ctx);
  },
  async update(ctx) {
    allowColumnAccess(
      { person_roles: rolesOf.administrator, customer: [], collaborator: [] },
      ctx
    );
    return super.update(ctx);
  },
}));
