const { getAcountByCPF, createAcount } = require('../models');

const { errorBusiness } = require('../helpers/errors');

const validadeCreate = async (name, CPF) => {
  const isAcount = await getAcountByCPF(CPF);
 
  if (isAcount) {
    return errorBusiness('Acount already registered');
  }
 
  const userCreated = await createAcount(name, CPF);

  return userCreated;
};

module.exports = { validadeCreate };