module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/validate-access',
      handler: 'auth.validateAccess',
      config: {
        prefix: '',
      },
    },
  ],
};
