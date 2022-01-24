const Joi = require('@hapi/joi');

const validateAcount = (req, _res, next) => {
  const minNameLength = 5;

  const { error } = Joi.object({
    name: Joi.string().min(minNameLength).not().empty()
.required(),
    CPF: Joi.string().min(11).not().empty()
.required(),
  }).validate(req.body);
  
  if (error) {
 return next({
    isJoi: true,
    message: error.details[0].message,
  }); 
}

  next();
};

module.exports = { validateAcount };