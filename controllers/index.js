const { createAcountController, getAll } = require('./acount');
const { createTransferController } = require('./transactions');

module.exports = {
  createAcountController,
  createTransferController,
  getAll,
};
