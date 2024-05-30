
const express = require('express');
const bodyParser = require('body-parser');
const formSubmit = require('../controller/productController')

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/submit1',formSubmit.fileSubmit)
router.post('/submit2',formSubmit.postFileSubmit)
router.post('/submit', formSubmit.getForm);
module.exports = router;
