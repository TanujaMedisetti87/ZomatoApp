'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {user} = require('./userEntity');
const userCtrl = require('./userController');

router.post('/add', (req, res) => {
  userCtrl.addUser(req, res);
});

router.post('/login', (req, res) => {
    userCtrl.login(req,res);
});

module.exports = router;
