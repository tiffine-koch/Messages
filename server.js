var express = require('express');
var stormpath = require('express-stormpath');

var messages = require('./routes/messages');

var app = express();
// app.use(stormpath.init(app, { website: true }));

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
    }
}));

app.get('/dashboard', stormpath.loginRequired, function(req, res) {
  res.send('You have reached the dashboard page! You must be logged in.');
});

app.use('/messages', stormpath.loginRequired, messages);


app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 3000);
});

//create a stormpath client
// var apiKey = new stormpath.ApiKey(
//   process.env['STORMPATH_CLIENT_APIKEY_ID'],
//   process.env['STORMPATH_CLIENT_APIKEY_SECRET']
// );
//
// var client = new stormpath.Client({ apiKey: apiKey });
//
// //stormpath application
// var applicationHref = process.env['STORMPATH_APPLICATION_HREF'];
//
// client.getApplication(applicationHref, function(err, application) {
//   console.log('Application:', application);
// });
//
// var account = {
//   firstName: 'Tiffine',
//   lastName: 'Koch',
//   email: 'tiffine.koch@gmail.com',
//   password: 'password20',
//   customData: {
//     message: 'white'
//   }
// };
//
// application.createAccount(account, function(err, createdAccount) {
//   console.log('Account:', createdAccount);
// });
//
// application.getAccounts({ email: 'tiffine.koch@gmail.com' }, function(err, accounts) {
//   accounts.each(function(account, callback) {
//     console.log('Account:', account);
//     callback();
//   }, function(err) {
//     console.log('Finished iterating over accounts.');
//   });
// });
//
// var authRequest = {
//   email: 'tiffine.koch@gmail.com',
//   password: 'password20'
// };
//
// application.authenticateAccount(authRequest, function(err, result) {
//   // If successful, the authentication result will have a method,
//   // getAccount(), for getting the authenticated account.
//   result.getAccount(function(err, account) {
//     console.log('Account:', account);
//   });
// };
