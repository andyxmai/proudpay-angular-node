'use strict';

angular.module('proudpayAngularNodeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $http.get('/api/merchants').success(function(merchants) {
      $scope.merchants = merchants;
    });
  });
