var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Message = require('../models/message');

router.get('/', function(req, res, next) {
  console.log(req.cookies);
  res.send('profile');
});

module.exports = router;
