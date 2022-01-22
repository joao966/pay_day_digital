const express = require('express');

const routerAcount = require('./acount');
const routerTransactions = require('./transactions');

const router = express.Router();

router.get('/', (_req, res) => res.status(200).json({ message: 'Welcome in pay day digital' }));
router.use('/acount', routerAcount);
router.use('/transactions', routerTransactions);

module.exports = router;
