"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { setSeqValue } = require('../utils/database_helpers');
const roles = {
    administrator: {
        id: 1,
        name: 'Administrator',
        description: 'Manda em tudo'
    },
    aluno: {
        id: 2,
        name: 'Aluno',
        description: "Estuda e sofre"
    },
    professor: {
        id: 3,
        name: 'Professor',
        description: 'Ensina e faz o aluno sofrer',
    },
};
const createRoles = async () => {
    const operations = Object.values(roles).map((element) => strapi.db.query('api::person-role.person-role').create({
        data: element,
    }));
    await Promise.all(operations);
    await setSeqValue('person_roles');
};
module.exports = {
    createRoles,
    roles,
};
