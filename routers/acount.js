const express = require('express');

const controller = require('../controllers');
const { validateAcount } = require('../middlewares');

const routerAcount = express.Router();

routerAcount.post('/', validateAcount, controller.createAcountController);

module.exports = routerAcount;
