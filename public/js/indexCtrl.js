'use strict';

var app = angular.module('messageApp');

app.controller('registerCtrl', function($scope, UserService) {
  $scope.register = function(user) {
    console.log('click register');
    UserService.register(user)
      .then(function(res) {
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      });
  };
});

app.controller('loginCtrl', function($scope, UserService) {
  $scope.login = function(user) {
    console.log('click register', $scope.login);
    UserService.login(user)
      .then(function(res) {
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      });
  }
});

app.controller('testCtrl', function($scope, $http) {
  console.log('test button');
  $scope.test = function() {
    $http.get('/protected')
      .then(function(res) {
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      })
    }
  });

app.controller('homeCtrl', function($scope, $http) {
  console.log('home');
});
