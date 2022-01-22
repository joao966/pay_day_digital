const express = require('express');
// const rescue = require('rescue');

const controller = require('../controllers');
const { validateAcount } = require('../middlewares');

const routerAcount = express.Router();

routerAcount.post('/', validateAcount, controller.createAcountController);
routerAcount.get('/', controller.getAll);

module.exports = routerAcount;
