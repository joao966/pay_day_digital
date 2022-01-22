const { validadeCreate, getAll } = require('./acount');
const { validateTransfer } = require('./transactions');

module.exports = {
  validadeCreate,
  validateTransfer,
  getAll,
};
