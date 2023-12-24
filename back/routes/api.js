const express = require('express');

const apiController = require('../controllers/api')

const router = express.Router();

router.post('/shorten/',apiController.postShorten)

module.exports = router