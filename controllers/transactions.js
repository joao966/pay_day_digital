const service = require('../services');

const createTransferController = async (req, res, next) => {
  const { type } = req.params;
 
  const { value, CPForigin, CPFdestiny, description } = req.body;

  const createdAcount = await service.validateTransfer(
    { value,
      CPForigin,
      CPFdestiny,
      description }, type,
    );

  if (createdAcount.isError) {
    return next(createdAcount);
  }
  
  return res.status(201).json({ transferSucess: createdAcount });
};

module.exports = {
  createTransferController,
};
