const createStrapiAdmin = async () => {
  const roleService = strapi.service('admin::role');
  const userService = strapi.service('admin::user');

  const superAdminRole = await roleService.getSuperAdmin();

  await userService.create({
    firstname: 'strapi',
    lastname: 'api',
    email: 'strapi@strapi.com',
    password: 'Pass1234',
    registrationToken: null,
    isActive: true,
    roles: superAdminRole ? [superAdminRole.id] : [],
  });
};

module.exports = {
  createStrapiAdmin,
};
