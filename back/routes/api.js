const express = require('express');

const apiController = require('../controllers/api')

const router = express.Router();

router.post('/shorten/',apiController.postShorten)
router.get('/getDomains/',apiController.getDomains)

module.exports = router