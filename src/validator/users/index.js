const InvariantError = require('../../exceptions/InvariantError');
const UserPayloadSchema = require('./schema');

const UserValidator = {
  validateUserPayload: (payload) => {
    const validatonResult = UserPayloadSchema.validate(payload);

    if (validatonResult.error) {
      throw new InvariantError(validatonResult.error.message);
    }
  },
};

module.exports = UserValidator;
