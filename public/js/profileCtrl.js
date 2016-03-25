'use strict';

var app = angular.module('messageApp');

app.controller('profileCtrl', function($scope, $http, MessageService, UserService) {
  console.log('profile');

  MessageService.getAll()
  .then(function(res) {
    $scope.messages = res.data;
    console.log('res:', res);
  }, function(err) {
    console.err('err:', err);
  })

  $scope.addMessage = function(message) {
    $scope.messages = [];
    console.log('click');
    console.log("message", $scope.message);
    var text = $scope.message.content;
    // var sender = user._id;
    // $scope.data = data.repeatSelect;
    var receiver = $scope.sender;
    console.log('text', text);
    // console.log('sender', sender);
    console.log('receiver', receiver);

    // var message = {content: text, senderId: sender, receiverId: receiver};
  //   MessageService.create(message)
  //     .then(function(res) {
  //       $scope.messages = res.data;
  //       swal("Yo! Sent");
  //       console.log('res:', res);
  //     }, function(err) {
  //     console.log('err:', err);
  //   })
  //   $scope.message = {};
  }

  $scope.logout = function(user) {

  }
});
