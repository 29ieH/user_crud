const express = require('express')
const {findAllUser,findOne} = require('../controller/user_controller.js');
const router = express.Router();
router.get('/user',findAllUser);
router.get('/user/:id',findOne);
module.exports = router;