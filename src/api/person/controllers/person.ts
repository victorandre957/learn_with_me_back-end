'use strict';
export default {}
/**
 *  user controller
 */

const { validateEmailBodyAccess } = require('./validations/user');
const {
  isCustomerLinkSuitability,
} = require('../../../utils/check-permission');
const { createCoreController } = require('@strapi/strapi').factories;
const { validatePasswordBodySchema } = require('./validations/auth');
const { allowColumnAccess } = require('../../../utils/allowColumnAccess');
const { rolesOf } = require('../../../utils/columnPermission');

module.exports = createCoreController('api::user.user', ({ strapi }) => ({
  async create(ctx) {
    // only admin can setup the user roles, for the rest the default role will be "customer"
    allowColumnAccess({ user_roles: rolesOf.administrator, customer: [], collaborator: [] }, ctx);
    return super.create(ctx);
  },
  async update(ctx) {
    allowColumnAccess(
      { user_roles: rolesOf.administrator, customer: [], collaborator: [] },
      ctx
    );
    return super.update(ctx);
  },
}));
