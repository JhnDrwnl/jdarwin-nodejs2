const express = require('express');
const router = express.Router()
const controller = require('../controller/jdelcontroller');

router.get('/', controller.index);
router.get('/john', controller.john);
router.get('/darwin', controller.darwin)
router.get('/jd', controller.jd)
router.get('/lambon', controller.lambon)

module.exports = router;