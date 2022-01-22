const Joi = require('@hapi/joi');

const validateTransactions = (req, _res, next, fields) => {
  const minNameLength = 5;

  const { error } = Joi.object({
    [fields.CPForigin]: Joi.string().min(minNameLength).not().empty()
.required(),
[fields.CPFdestiny]: Joi.string().min(minNameLength).not().empty()
.required(),
   [fields.value]: Joi.number().min(1).not().empty()
.required(),
    [fields.description]: Joi.string().min(1),
  }).validate(req.body);
  
  if (error) {
 return next({
    isJoi: true,
    message: error.details[0].message,
  }); 
}

  next();
};

module.exports = { validateTransactions };