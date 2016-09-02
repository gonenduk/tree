const Joi = require('joi');

module.exports = {
  get: {
    params: {
      id: Joi.number().min(0)
    }
  }
};
