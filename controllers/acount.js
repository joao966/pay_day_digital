const service = require('../services');

const createAcountController = async (req, res, next) => {
  const { name, CPF } = req.body;

  const createdAcount = await service.validadeCreate(name, CPF);

  if (createdAcount.isError) {
    return next(createdAcount);
  }

  const newUser = {
    name,
    CPF,
    role: createdAcount.role,
    _id: createdAcount.id,
    balance: createdAcount.balance,
  };

  return res.status(201).json({ user: newUser });
};

const getAll = async (_req, res) => {
  const result = await service.getAll();

  return res.status(200).json({ result });
};

module.exports = {
  createAcountController,
  getAll,
};
