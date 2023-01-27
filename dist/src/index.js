"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authStrategy = require('./strategies/auth.js');
const { initSeeders } = require('../database/seeders');
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({ strapi }) {
        strapi.container.get('auth').register('content-api', authStrategy);
    },
    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    async bootstrap({ strapi }) {
        await initSeeders();
    },
};
