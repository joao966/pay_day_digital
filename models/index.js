const {
  getAcountByCPF,
  updateBalanceSum,
  updateBalanceSub,
  createAcount,
  getAllAcounts,
  } = require('./Acount');
const { createTransfer, createDeposit } = require('./transactions');

module.exports = {
  getAcountByCPF,
  updateBalanceSum,
  updateBalanceSub,
  createAcount,
  createTransfer,
  createDeposit,
  getAllAcounts,
};
