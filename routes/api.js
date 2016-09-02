const express = require('express');
const validations = require('./validations');
const Celebrate = require('celebrate');
const Boom = require('boom');
const router = express.Router();

// GET API listing
router.get('/', (req, res, next) => {
  res.send('Did you mean /api/subsites/:id ?');
});

// GET sub sites list
router.get('/subsites/:id', Celebrate(validations.subsites.get), (req, res, next) => {
  let data = {};

  switch (req.params.id) {
    case 0:
      res.json('0');
      break;

    case 1:
      break;

    case 2:
      break;

    default:
      return next (Boom.notFound('ID not found', {name: 'aaa'}));
      break;
  }

  res.json(data);
});

/**
 * API error handlers
 */

// Catch 404 and forward to API error handler
router.use((req, res, next) => {
  next(Boom.notFound('API endpoint not found'));
});

// API error handler
router.use((err, req, res, next) => {
  const errPayload = Boom.wrap(err, err.isJoi ? 400 : 500).output.payload;
  if (errPayload.statusCode == 500) {
    logger.error(err.stack);
  }
  res.status(errPayload.statusCode).json(errPayload);
});

module.exports = router;
