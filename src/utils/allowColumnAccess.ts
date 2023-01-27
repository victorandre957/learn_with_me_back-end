export default {}
const { checkPermission } = require('./check-permission');
const { PolicyError } = require('@strapi/utils').errors;

const allowColumnAccess = (permissions, ctx) => {
  const userRole = ctx.state.user.user_roles;
  const updateColumns = Object.keys(ctx.request.body.data);
  const columns = Object.keys(permissions);

  const interaction = updateColumns.filter((column) =>
    columns.includes(column)
  );
  const columnsNotAccessible = interaction.filter(
    (key) => checkPermission(permissions[key], userRole) !== true
  );

  if (columnsNotAccessible[0]) {
    throw new PolicyError(
      `you don't have permission to run ${ctx.request.method} on this column`,
      columnsNotAccessible
    );
  }
};

module.exports = {
  allowColumnAccess,
};
