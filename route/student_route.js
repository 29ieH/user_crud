const express = require('express')
const {createStudent} = require('../controller/student.js');
const router = express.Router();
router.post('/student',createStudent);
module.exports = router;