const express = require('express');
const router = express.Router();
const createUrl = require('../controller/create_url');
const redirect = require('../controller/redirect')

router.post('/shorten', createUrl)
router.get('/:code', redirect)


module.exports = router;