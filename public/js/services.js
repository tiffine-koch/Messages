'use strict';

var app = angular.module('messageApp');

app.service('UserService', function($http) {

  this.register = function(user) {
    return $http.post('/users/register', user);
  };

  this.login = function(user) {
    return $http.post('/users/authenticate', user);
  }

});

app.service('MessageService', function($http) {

  this.getAll = function() {
    return $http.get('/messages');
  };

  this.create = function(message) {
    return $http.post('/messages', message);
  };

  this.addMessage = function(userId, messageId) {
    return $http.put(`/users/${userId}/addMessage/${messageId}`);
  }
});
