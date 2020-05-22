const express = require('express');
const router = express.Router();
const { generateResults } = require('./../controllers/dbcExecController');

router.route('/').post(generateResults);

module.exports = router;
