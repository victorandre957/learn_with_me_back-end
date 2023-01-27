"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { yup, validateYupSchema } = require('@strapi/utils');
const emailBodySchema = yup.object().shape({
    email: yup.string().required(),
});
const passwordBodySchema = yup.object().shape({
    password: yup.string().required(),
});
module.exports = {
    validateEmailBodyAccess: validateYupSchema(emailBodySchema),
};
