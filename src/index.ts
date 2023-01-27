import { Strapi } from "@strapi/strapi";
const authStrategy = require('./strategies/auth.js');
const { initSeeders } = require('../database/seeders');

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register( { strapi }: { strapi: Strapi }) {
    strapi.container.get('auth').register('content-api', authStrategy);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Strapi }) {
    await initSeeders();
  },
};
