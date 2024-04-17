const express = require('express')
const {findAllUser} = require('../controller/user_controller.js');
const router = express.Router();
router.get('/user',findAllUser);
module.exports = router;