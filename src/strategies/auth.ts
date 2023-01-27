/*
 * strapi/plugins/persons-permissions/server/strategies/persons-permissions.js
 * função encontrada no repositorio oficial do strapi, estrategia de autendicação de usuario.
 *
 */
const { ValidationPermissionError } = require('../utils/errors');

const authenticate = async (ctx) => {
  const token = ctx.request.header.authorization?.substring(7);

  if (token) {
    const personId = strapi
      .service('api::person.auth')
      .validateToken('login', token);

    if (personId === undefined) {
      return { authenticated: false };
    }
    // Access login
    const person = await strapi
      .service('api::person.person')

    if (!person) {
      return { error: 'Invalid credentials' };
    }

    ctx.state.person = person;
    return {
      authenticated: true,
      credentials: person,
    };
  }

  ctx.state.person = { person_roles: [{ name: 'not_logged_in' }] };
  return {
    authenticated: true,
    credentials: ctx.state.person,
  };
};

module.exports = {
  authenticate,
  name: 'person authentication',
};
