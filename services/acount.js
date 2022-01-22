const { getAcountByCPF, createAcount, getAllAcounts } = require('../models');

const { errorBusiness } = require('../helpers/errors');

const validadeCreate = async (name, CPF) => {
  const isAcount = await getAcountByCPF(CPF);
 
  if (isAcount) {
    return errorBusiness('Acount already registered');
  }
 
  const userCreated = await createAcount(name, CPF);

  return userCreated;
};

const getAll = async () => {
  const result = await getAllAcounts();
  return result;
};

module.exports = { validadeCreate, getAll };