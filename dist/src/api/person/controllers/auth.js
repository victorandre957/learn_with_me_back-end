'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/**
 *  auth controller
 */
require('dotenv').config();
const { validateAccessBodyAccess, } = require('./validations/auth');
module.exports = {
    async validateAccess(ctx) {
        const service = strapi.service('api::person.auth');
        await validateAccessBodyAccess(ctx.request.body);
        const { identifier, password } = ctx.request.body;
        const person = await strapi.db.query('api::person.person').findOne({
            where: {
                email: {
                    $eq: identifier.toLowerCase(),
                },
            },
        });
        const passwordCrypt = person ? person.password : 'denied';
        const validateHashPassword = await service.compare(password, passwordCrypt);
        if (!person || !validateHashPassword) {
            return ctx.unauthorized('Invalid identifier or password');
        }
        const tokenTime = '12h';
        return service.getValidSectionData(person.id, tokenTime);
    },
};
