const express = require('express');

const router = express.Router();

const redirectController = require('../controllers/redirect')

router.get('*',redirectController.redirectRequest)

module.exports = router
