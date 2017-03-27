const Joi = require('joi');

const querystringValidation = Joi.object().keys({
  _id: Joi.string(),
  tags: Joi.string(),
  fields: Joi.string(),
});

module.exports = querystringValidation;
