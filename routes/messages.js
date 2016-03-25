var express = require('express');
var router = express.Router();

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res) {
  Message.find({}, function(err, messages) {
  // Message.find({receiver: req.params.id}, function(err, messages) {
    res.status(err ? 400 : 200).send(err || messages);
  });
});

router.post('/', function(req, res) {
  var message = new Message(req.body);
  message.save(function(err, savedMessage) {
    res.status(err ? 400 : 200).send(err || savedMessage);
  });
});

module.exports = router;
