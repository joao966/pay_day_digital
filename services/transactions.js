const { getAcountByCPF,
  updateBalanceSum,
  updateBalanceSub,
  createTransfer,
  createDeposit } = require('../models');

const { errorBusiness } = require('../helpers/errors');

const transactionTransfer = async ({ value, CPForigin, CPFdestiny, description }, isAcount) => {
  await updateBalanceSub(CPForigin, value);
  await updateBalanceSum(CPFdestiny, value);

  if (value > 2000) {
    return errorBusiness('maximum transaction amount exceeded');
  }

  if (isAcount.balance < value) {
    return errorBusiness('insufficient funds');
  }
 
  const acountCreate = await createTransfer(value, CPForigin, CPFdestiny, description);

  return acountCreate;
};

const transactionDeposit = async ({ value, CPForigin, CPFdestiny, description }) => {
  await updateBalanceSum(CPFdestiny, value);
  
  const acountCreate = await createDeposit(value, CPForigin, CPFdestiny, description);

  return acountCreate;
};

const validateTransfer = async ({ value, CPForigin, CPFdestiny, description }, type) => {
  const isAcount = await getAcountByCPF(CPForigin);
 
  if (!isAcount) {
    return errorBusiness('Acount Invalid');
  }

  if (type === 'transfer') {
    return transactionTransfer({ value, CPForigin, CPFdestiny, description }, isAcount);
  }

  if (type === 'deposit') {
    return transactionDeposit({ value, CPForigin, CPFdestiny, description });
  }
};

module.exports = { validateTransfer };