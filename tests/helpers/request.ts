export default {}
const supertest = require('supertest');

/**
 * Make a request using super test, and return the token for the valid session.
 * NOTE: only works for 2fa users
 * @param {string} userEmail
 */
async function getValidSession(userEmail) {
  const response = await supertest(strapi.server.httpServer)
    .post('/api/auth/validate-access')
    .send({
      identifier: userEmail,
      password: '123456',
    });

  return {
    headerKey: 'Authorization',
    value: `Bearer ${response.body.jwt}`,
  };
}

module.exports = { getValidSession };
