"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
const { roles } = require("./person_roles");
const { setSeqValue } = require("../utils/database_helpers");
const { hashPassword } = require('../../src/api/person/services/auth');
const password = "123456";
const passwordHs = hashPassword(password);
const persons = {
    armando: {
        id: 1,
        name: "Armando Algo",
        email: "admin@strapi.com",
        password: passwordHs,
        persons_role: [roles.administrator.id],
    },
    abe: {
        id: 2,
        name: "Abe Ração",
        email: "professor@strapi.com",
        password: passwordHs,
        persons_role: [roles.professor.id],
    },
    colapso: {
        id: 3,
        name: "Colápso Cardíaco da Silva",
        email: "aluno@strapi.com",
        password: passwordHs,
        persons_role: [roles.aluno.id],
    },
};
const createPerson = async () => {
    const operations = Object.values(persons).map((element) => strapi.db.query('api::person.person').create({
        data: element,
    }));
    await Promise.all(operations);
    await setSeqValue('persons');
};
module.exports = {
    createPerson,
    persons,
};
