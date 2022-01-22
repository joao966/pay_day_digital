const express = require('express');

const routerAcount = require('./acount');

const router = express.Router();

router.get('/', (_req, res) => res.status(200).json({ message: 'Welcome in pay day digital' }));
router.use('/acount', routerAcount);

module.exports = router;
