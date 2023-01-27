"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { yup, validateYupSchema } = require('@strapi/utils');
const callbackBodySchema = yup.object().shape({
    identifier: yup.string().required(),
    password: yup.string().required(),
});
module.exports = {
    validateAccessBodyAccess: validateYupSchema(callbackBodySchema),
};
