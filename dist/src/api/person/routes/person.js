"use strict";
/**
 * person router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter('api::person.person', {
    config: {
        find: {},
        findOne: {},
        create: {},
        update: {},
        delete: {},
    },
});
