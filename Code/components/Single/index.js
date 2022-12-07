const express = require('express');
const router = express.Router();

const SingleController = require('./SingleController');

router.get('/', SingleController.Single);

module.exports = router;
