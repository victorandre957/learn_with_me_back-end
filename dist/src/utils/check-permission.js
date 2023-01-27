const checkPermission = (allowedRoles, personRoles) => {
    const authorized = personRoles.some((uRole) => allowedRoles.includes(uRole.name));
    return authorized;
};
const isAdministrator = (personRoles) => {
    const allowedRoles = "administrador";
    return checkPermission(allowedRoles, personRoles);
};
const isProfessor = (personRoles) => {
    const allowedRoles = "professor";
    return checkPermission(allowedRoles, personRoles);
};
const isAluno = (personRoles) => {
    const allowedRoles = "aluno";
    return checkPermission(allowedRoles, personRoles);
};
const notLoggedIn = (personRoles) => {
    const allowedRoles = "not_logged_in";
    return checkPermission(allowedRoles, personRoles);
};
module.exports = {
    checkPermission,
    isAdministrator,
    isProfessor,
    isAluno,
    notLoggedIn,
};
