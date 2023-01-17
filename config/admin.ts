export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '44c1d352beaad2fb042dd0a7467ae607'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
