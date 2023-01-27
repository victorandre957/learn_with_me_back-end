"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * auth service.
 */
exports.default = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const hashPassword = (password) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
};
const isHashed = (password) => {
    if (typeof password !== 'string' || !password) {
        return false;
    }
    return password.split('$').length === 4;
};
const compare = async (password, encrypted) => {
    return await bcrypt.compare(password, encrypted);
};
// decode token jwt
const decodeJwt = (token) => {
    const decode = jwt.decode(token, { complete: true });
    return decode === null || decode === void 0 ? void 0 : decode.payload;
};
module.exports = {
    decodeJwt,
    isHashed,
    hashPassword,
    compare,
};
