const error = require('./error');

const { validateAcount } = require('./validateAcount');
const { validateTransactions } = require('./validatetransactions');

module.exports = {
  error,
  validateAcount,
  validateTransactions,
};
