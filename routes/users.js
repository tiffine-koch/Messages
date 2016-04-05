var express = require('express');
var stormpath = require('stormpath');
var router = express.Router();

var User = require('../models/user');
var Message = require('../models/message');

//create a stormpath client
var apiKey = new stormpath.ApiKey(
  process.env['STORMPATH_CLIENT_APIKEY_ID'],
  process.env['STORMPATH_CLIENT_APIKEY_SECRET']
);

var client = new stormpath.Client({ apiKey: apiKey });

//stormpath application
var applicationHref = process.env['STORMPATH_APPLICATION_HREF'];

client.getApplication(applicationHref, function(err, application) {
  console.log('Application:', application);
});

var account = {
  givenName: 'Joe',
  surname: 'Stormtrooper',
  username: 'tk421',
  email: 'tk421@stormpath.com',
  password: 'Changeme1',
  customData: {
    favoriteColor: 'white'
  }
};

application.createAccount(account, function(err, createdAccount) {
  console.log('Account:', createdAccount);
});

application.getAccounts({ username: 'tk421' }, function(err, accounts) {
  accounts.each(function(account, callback) {
    console.log('Account:', account);
    callback();
  }, function(err) {
    console.log('Finished iterating over accounts.');
  });
});

var authRequest = {
  username: 'tk421',
  password: 'Changeme1'
};

application.authenticateAccount(authRequest, function(err, result) {
  // If successful, the authentication result will have a method,
  // getAccount(), for getting the authenticated account.
  result.getAccount(function(err, account) {
    console.log('Account:', account);
  });
};

//// express

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.status(err ? 400 : 200).send(err || users);
  });
});

router.post('/authenticate', function(req, res) {
  User.authenticate(req.body, function(err, token) {
    if(err) {
      res.status(400).send(err);
    } else {
      res.cookie('tiffcookie', token).send();
    }
  });
});

router.post('/register', function(req, res) {
  User.register(req.body, function(err) {
    res.status(err ? 400 : 200).send(err);
  });
});

router.get('/profile', User.authMiddleWare, function(req, res) {
  console.log('req.user:', req.user);
  res.send(req.user);
});

module.exports = router;
