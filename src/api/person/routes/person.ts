/**
 * person router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::person.person', {
  config: {
    find: {},
    findOne: {},
    create: {},

    update: {},
    delete: {},
  },
});
