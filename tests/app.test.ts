const { setupStrapi, cleanupStrapi } = require('./helpers/strapi');

//@ts-ignore
beforeAll(async (done) => {
  await setupStrapi();
  done();
});

//@ts-ignore
afterAll(async (done) => {
  await cleanupStrapi();
  done();
});

it('strapi is defined', () => {
  expect(strapi).toBeDefined();
});

require('./auth');
