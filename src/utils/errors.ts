export default {}
const { ApplicationError } = require('@strapi/utils').errors;

class ValidationPermissionError extends ApplicationError {
  constructor(message, details = {}) {
    super();
    this.name = 'PermissionError';
    this.message = message || 'A permission error has occurred';
    this.details = details;
  }
}

module.exports = {
  ValidationPermissionError,
};
