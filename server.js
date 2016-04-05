var express = require('express');
var stormpath = require('stormpath');

var app = express();
app.use(stormpath.init(app, { website: true }));

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
//   givenName: 'Joe',
//   surname: 'Stormtrooper',
//   username: 'tk421',
//   email: 'tk421@stormpath.com',
//   password: 'Changeme1',
//   customData: {
//     favoriteColor: 'white'
//   }
// };
//
// application.createAccount(account, function(err, createdAccount) {
//   console.log('Account:', createdAccount);
// });
//
// application.getAccounts({ username: 'tk421' }, function(err, accounts) {
//   accounts.each(function(account, callback) {
//     console.log('Account:', account);
//     callback();
//   }, function(err) {
//     console.log('Finished iterating over accounts.');
//   });
// });
//
// var authRequest = {
//   username: 'tk421',
//   password: 'Changeme1'
// };
//
// application.authenticateAccount(authRequest, function(err, result) {
//   // If successful, the authentication result will have a method,
//   // getAccount(), for getting the authenticated account.
//   result.getAccount(function(err, account) {
//     console.log('Account:', account);
//   });
// };
