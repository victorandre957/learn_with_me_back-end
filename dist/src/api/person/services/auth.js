"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * auth service.
 */
exports.default = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ms = require('ms');
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
const generateToken = (scope, userId, expiresIn = '15m') => {
    if (!expiresIn) {
        const token = jwt.sign({ scope, userId }, process.env.JWT_SECRET);
        return {
            token,
        };
    }
    const tempToken = jwt.sign({ scope, userId }, process.env.JWT_SECRET, {
        expiresIn,
    });
    // date where time will expire
    const expiresAt = new Date(Date.now() + ms(expiresIn));
    return {
        tempToken,
        expiresAt,
    };
};
const getValidSectionData = async (userId, sessionExpTime = '12h') => {
    const { tempToken } = generateToken('login', userId, sessionExpTime);
    return {
        jwt: tempToken,
    };
};
module.exports = {
    decodeJwt,
    isHashed,
    hashPassword,
    compare,
    getValidSectionData,
    generateToken,
};
