const express = require('express');

const controller = require('../controllers');
const { validateTransactions } = require('../middlewares');

const routerTransactions = express.Router();

const bodyValidateTransactions = {
  CPForigin: 'CPForigin',
  CPFdestiny: 'CPFdestiny',
  value: 'value',
  description: 'description',
};

routerTransactions.post('/:type', (req, res, next) =>
  validateTransactions(req, res, next, bodyValidateTransactions),
    controller.createTransferController);

module.exports = routerTransactions;